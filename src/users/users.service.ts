import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor (private readonly usersRepository : UsersRepository) { }
  getHealthUsers(): string {
    return 'Users online!';
  }

  async create(body: UserDto): Promise<void>{
    await this.usersRepository.addNewUser(body);
  }

 async findAll() : Promise<UserDto[]>{
    return await this.usersRepository.getAllUsers();
  }

 async findOne(id: number): Promise<UserDto> {
    return  await this.usersRepository.getUserById(id);
  }

  async update(id: number, body: UserDto): Promise<void> {
    await this.usersRepository.updateUserById(id,body);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.deleteUserById(id);
  }
}
