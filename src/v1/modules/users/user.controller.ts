import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserInterface } from './user.interface';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UsersService){}

    @Post('aventureiro')
    public new(@Body() user:UserInterface):Observable<UserInterface> {
        return this.userService.create(user);
    }

}
