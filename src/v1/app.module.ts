import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { AuthenticationController } from './modules/authentication/authentication.controller';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ProjectsController } from './modules/projects/projects.controller';
import { ProjectsModule } from './modules/projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [  
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    UsersModule,
    AuthenticationModule, 
    ProjectsModule, 
    JwtModule.register({
      secret: process.env.TOKEN,
      signOptions: { expiresIn: '4h' },
    })
  ],
  controllers: [AppController, AuthenticationController, ProjectsController],
  providers: [AppService]
})

export class AppModule {}
