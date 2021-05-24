import { Module } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({  
    imports: [ UsersModule, PassportModule ],  
    providers: [AuthorizationService, LocalStrategy, JwtStrategy]
})
export class AuthorizationModule {}
