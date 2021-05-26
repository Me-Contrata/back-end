import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Reflector } from '@nestjs/core';
import {UserDto} from '../users/dto/user.dto';


@Injectable()
export class AuthorizationService {
    constructor(private readonly userService: UsersService, private reflector: Reflector) {}

    async validateUser(email: string, password:string) {
        // let user:User = await this.userService.getEmailAndPassword(email);
        // if (user && user.email === email && user.password === password) {
        //   const { ...result } = user;
        //   return result;
        // }
        return null;
    }
}
