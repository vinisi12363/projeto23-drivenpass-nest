import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from '@prisma/client';
import * as SignUpDto from 'src/users/dto/user.dto';
import * as SignInDto from 'src/users/dto/user.dto';
import * as bcrypt from "bcrypt";
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

  private EXPIRATION_TIME = "7 days";
  private ISSUER = "Driven";
  private AUDIENCE = "users";

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService) { }

  async signUp(signUpDto: SignInDto.UserDto) {
    return await this.usersService.create(signUpDto);
  }

  async signIn(signInDto: SignInDto.UserDto) {
    const { username, password } = signInDto;

    const user = await this.usersService.getUserByUsername(username);
    if (!user) throw new UnauthorizedException(`Email or password not valid.`);

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException(`Email or password not valid.`);

    return this.createToken(user);
  }

  private async createToken(user: User) {
    const { id, username } = user;

    const token = this.jwtService.sign({ username }, {
      expiresIn: this.EXPIRATION_TIME,
      subject: String(id),
      issuer: this.ISSUER,
      audience: this.AUDIENCE
    });

    return { token }
  }

}