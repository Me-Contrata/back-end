import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Reflector } from '@nestjs/core';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private reflector: Reflector) {}

    async validateUser(email: string) {
        const user = {email: ''};
        if (user && user.email === email) {
          const { ...result } = user;
          return result;
        }
        return null;
    }
}
