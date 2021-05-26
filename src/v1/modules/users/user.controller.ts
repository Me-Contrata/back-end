import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UsersService){}

    @Post()
    public new(@Body() user:UserDto):Promise<User> {
        return this.userService.create(user);
    }

}
