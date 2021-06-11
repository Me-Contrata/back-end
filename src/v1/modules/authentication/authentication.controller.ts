import { Controller, Body, Post, NotFoundException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import {LoginPayload} from './dto/login-payload.dto';

@Controller()
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) {}
}
