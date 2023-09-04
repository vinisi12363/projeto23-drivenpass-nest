import { IsEmail, IsNotEmpty , IsNumber, IsOptional, IsStrongPassword} from "class-validator";
export class UserDto {
    @IsOptional()
    @IsNumber()
    id?:number;
     
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @IsStrongPassword()
    password:string;
}
