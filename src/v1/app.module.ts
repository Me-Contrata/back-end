import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { AuthenticationController } from './modules/authentication/authentication.controller';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { ProjectsController } from './modules/projects/projects.controller';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProjectsService } from './modules/projects/projects.service';

@Module({
  imports: [UsersModule, AuthorizationModule, AuthenticationModule, ProjectsModule],
  controllers: [AppController, AuthenticationController, ProjectsController],
  providers: [AppService, AuthenticationService, ProjectsService]
})
export class AppModule {}
