import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';

@Module({
  imports: [UsersModule, AuthorizationModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
