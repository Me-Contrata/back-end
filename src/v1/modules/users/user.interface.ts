import { Expose, Exclude } from "class-transformer";
import { IsNotEmpty, Equals } from "class-validator";
import {Match} from '../../common/decorators/validation.decorator'

@Expose()
export class UserInterface {
    @IsNotEmpty()
    name?: string;

    @IsNotEmpty()
    email?: string;

    @IsNotEmpty()
    password?: string

    @IsNotEmpty()
    @Match('password', {message: 'field confirmPassword must match with password field'})
    @Exclude()
    confirmPassword?: string;

    github?: string
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
}