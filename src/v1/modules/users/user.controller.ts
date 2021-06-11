import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserInterface } from './user.interface';
import { Observable } from 'rxjs';
import { LoginPayload } from '../authentication/dto/login-payload.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UsersService){}

    @Post('/login')
    async login(@Body() UserPayload:LoginPayload) {
        let user = await this.userService.login(UserPayload);

        if(!user) {
            throw new NotFoundException('user not found');
        }

        return user;
    }

    @Post()
    public new(@Body() user:UserInterface):Observable<UserInterface> {
        return this.userService.create(user);
    }

}
