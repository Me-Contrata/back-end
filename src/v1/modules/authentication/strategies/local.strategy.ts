import {Injectable, Inject, UnauthorizedException} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import {UsersService} from '../../users/users.service';
import {AuthenticationService} from '../../authentication/authentication.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService, private authService: AuthenticationService) {
        super();
    }

    async validate(username: string, password:string): Promise<any> {
        const user = await this.userService.getByEmail(username);

        if(!user || !await this.authService.comparePasswords(password, user.password)) {
            throw new UnauthorizedException();
        }

        return {
            auth_token: await this.authService.generateJWT(user)
        }
    }
}