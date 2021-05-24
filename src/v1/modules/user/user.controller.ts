import { Body, Controller, Post } from '@nestjs/common';
import {UserDTO} from '../users/dto/user.dto';
import { UsersService } from '../users/users.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UsersService){}

    @Post()
    public new(@Body() user:UserDTO) {
        return this.userService.create(user);
    }

}
