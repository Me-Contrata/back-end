import {Injectable, Inject, UnauthorizedException} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import {AuthorizationService} from './authorization.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authorizationService: AuthorizationService) {
        super();
    }

    async validate(email: string, password:string): Promise<any> {
        const user = this.authorizationService.validateUser(email, password);

        if(!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}