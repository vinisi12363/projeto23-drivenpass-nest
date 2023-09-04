import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';




@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('health')
  userHealth(){
    return this.usersService.getHealthUsers();
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() body: UserDto) {
    return this.usersService.signUp(body);
  }
  @Post("sign-in")
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: UserDto) {
    return this.usersService.signIn(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
