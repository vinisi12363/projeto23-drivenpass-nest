import { IsString, IsEmail, IsNotEmpty , IsStrongPassword} from "class-validator";
export class UserDto {
    
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @IsStrongPassword()
    password:string;
    
}
