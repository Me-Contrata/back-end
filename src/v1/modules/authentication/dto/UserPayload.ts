import {IsEmail, IsNotEmpty} from 'class-validator';

export class UserPayload {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}