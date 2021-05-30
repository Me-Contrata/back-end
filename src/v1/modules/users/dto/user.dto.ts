import { IsNotEmpty, Equals } from "class-validator";
import {Match} from '../../../common/decorators/validation.decorator'
import { User } from "../user.entity";
import { Exclude, Expose } from 'class-transformer';
export class UserDto {
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