import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UsersService){}

    @Post()
    public new(@Body() user:UserDto) {
        return this.userService.create(user);
    }

}
