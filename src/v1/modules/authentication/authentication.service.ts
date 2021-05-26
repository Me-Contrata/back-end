import {LoginPayload} from './dto/login-payload.dto';
import { Injectable } from '@nestjs/common';
import {UsersService} from '../users/users.service'

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService:UsersService
    ) {}

    async login(user: LoginPayload) {
        return this.userService.getEmailAndPassword(user);
    }
}
