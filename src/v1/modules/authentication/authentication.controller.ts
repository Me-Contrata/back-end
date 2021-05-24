import { Controller, Body, Post, NotFoundException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import {LoginPayload} from './dto/LoginPayload';

@Controller()
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) {}

    @Post('/login')
    async login(@Body() UserPayload:LoginPayload) {
        let user = await this.authService.login(UserPayload);

        if(!user) {
            throw new NotFoundException('user not found');
        }

        return user;
    }
}
