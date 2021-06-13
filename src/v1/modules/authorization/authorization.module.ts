import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from '../authentication/strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../authentication/strategies/jwt.strategy';


@Module({  
    imports: [ UsersModule, PassportModule ],  
    providers: [LocalStrategy, JwtStrategy]
})
export class AuthorizationModule {}
