import { IsString, IsNotEmpty } from "class-validator";

export class SessionDto {
    @IsNotEmpty()
    @IsString()
    token: string;
}
