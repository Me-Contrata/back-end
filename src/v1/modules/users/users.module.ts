import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import UserRepository from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { AuthenticationModule } from '../authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    AuthenticationModule
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UserController]
})

export class UsersModule {
}
