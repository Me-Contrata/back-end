import {UserPayload} from './dto/UserPayload';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
    async findOne(user: UserPayload): Promise<Number> {
        return 6;
    }
}
