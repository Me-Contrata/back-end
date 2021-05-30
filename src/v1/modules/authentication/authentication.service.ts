import {LoginPayload} from './dto/login-payload.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import {UsersService} from '../users/users.service'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService:UsersService,
        private jwtService:JwtService
    ) {}

    async login(user: LoginPayload) {
        let userResponse = await this.userService.getEmailAndPassword(user);

        console.log(userResponse);

        if(!userResponse) {
            throw new NotFoundException('user not found');
        }

        return {
            auth_token: this.jwtService.sign({user: userResponse.email, id: userResponse.id, name: userResponse.name})
        }
    }
}
