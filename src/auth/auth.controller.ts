import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';


@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService , private readonly userDto: UserDto, private readonly userService: UsersService) { }

  // create
  

  // login
  

}