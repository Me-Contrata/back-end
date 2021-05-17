import { Controller, Body, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import {UserPayload} from './dto/UserPayload';

@Controller()
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) {}

    @Post('/login')
    login(@Body() UserPayload:UserPayload) {
        return this.authService.findOne(UserPayload);
    }
}
