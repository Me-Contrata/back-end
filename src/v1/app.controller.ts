import { Controller, Get, Post, Req, SetMetadata } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { Roles } from './common/decorators/roles.decorator';
import { Role } from './common/enums/role.enum';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Roles(Role.Aventureiro)
  @Get('/')
  getStatus(@Req() request: Request): Object {
    console.log(request)
    return {'status': 'it\'s working'};
  }
}
