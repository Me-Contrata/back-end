import { IsNotEmpty, Equals } from "class-validator";
import {Match} from '../../../common/decorators/validation.decorator'
import { User } from "../user.entity";

export class UserDto extends User{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @Match('password', {message: 'field confirmPassword must match with password field'})
    confirmPassword: string;
}