import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersRepository } from './repository/users.repository';
import { ConflictUserException, NotFoundUserException, UnauthorizedUserException } from './exceptions/users.exceptions';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  private EXPIRATION_TIME = "7 days";
  private ISSUER = "Driven";
  private AUDIENCE = "users";

  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) { }
  getHealthUsers(): string {
    return 'Users online!';
  }

  async signUp(body: UserDto): Promise<void> {
    const emailExists = await this.usersRepository.getUserByEmail(body.email);
    const hashedPassword = await bcrypt.hash(body.password, 10);
    if (!emailExists) {
      await this.usersRepository.addNewUser({ email:body.email, password:hashedPassword });
    } else {
      throw new ConflictUserException();
    }

  }

  async signIn(body: UserDto): Promise<any> {
    const user = await this.usersRepository.getUserByEmail(body.email);
    if(user){
    const isPasswordMatch   =  await bcrypt.compare(body.password, user.password);
     if(isPasswordMatch){
        return await this.createToken(body);
     }else{
        throw new UnauthorizedUserException();
     }
    }else{
      throw new NotFoundUserException(body.email);
    }
  }

  async createToken(body: any) {
    const user = await this.usersRepository.getUserByEmail(body.email);
    const token = this.jwtService.sign({ email: user.email }, { 
      expiresIn: this.EXPIRATION_TIME,
      subject: String(user.id), 
      issuer: this.ISSUER,
      audience: this.AUDIENCE 
    })
    return { token };
  }

  checkToken(token: string) {
    const data = this.jwtService.verify(token, {
      audience: this.AUDIENCE,
      issuer: this.ISSUER
    });

    return data;
  }


  async findAll(): Promise<UserDto[]> {
    return await this.usersRepository.getAllUsers();
  }

  async findOne(id: number): Promise<UserDto> {
    return await this.usersRepository.getUserById(id);
  }

  async update(id: number, body: UserDto): Promise<void> {
    await this.usersRepository.updateUserById(id, body);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.deleteUserById(id);
  }
}
