import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [AuthenticationService],
  imports: [UsersModule],
  controllers: [AuthenticationController]
})

export class AuthenticationModule {}
