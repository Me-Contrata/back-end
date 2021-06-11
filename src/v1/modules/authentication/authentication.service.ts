import {Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Observable, from, of } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(
        private jwtService:JwtService
    ) {}

    generateJWT(payload: Object): Promise<string> {
        return this.jwtService.signAsync({user: payload});
    }

    hashPassword(password: string): Observable <string> {
        return from<Promise<string>>(bcrypt.hash(password, 12));
    }

    async comparePasswords(password: string, storedPasswordHash: string): Promise<boolean> {
        return await bcrypt.compare(password, storedPasswordHash);
    }
}
