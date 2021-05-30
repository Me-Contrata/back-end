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
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [  
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('HOST'),
            port: +configService.get<number>('PORT'),
            username: configService.get('DATABASE_USERNAME'),
            password: configService.get('DATABASE_PASSWORD'),
            database: configService.get('DATABASE'),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        })
      }
    ),
    UsersModule, 
    AuthorizationModule, 
    AuthenticationModule, 
    ProjectsModule, 
    JwtModule.register({
      secret: process.env.TOKEN,
      signOptions: { expiresIn: '4h' },
    })
  ],
  controllers: [AppController, AuthenticationController, ProjectsController],
  providers: [AppService, AuthenticationService, ProjectsService]
})

export class AppModule {}
