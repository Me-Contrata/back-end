import { IsNotEmpty } from "class-validator";
import {Match} from '../../common/decorators/validation.decorator'

export class UserInterface {
    @IsNotEmpty()
    name?: string;

    @IsNotEmpty()
    email?: string;

    @IsNotEmpty()
    password?: string

    @IsNotEmpty()
    @Match('password', {message: 'field confirmPassword must match with password field'})
    confirmPassword?: string;

    github?: string
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
}