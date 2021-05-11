import { Controller, Get, Post, Req, SetMetadata, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { Roles } from './common/decorators/roles.decorator';
import { Role } from './common/enums/role.enum';
import { JwtGuard } from './common/guards/jwt.guard';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtGuard)
  @Post('/')
  @Roles(Role.Explorador)
  getStatus(@Req() request: Request): Object {
    return {'status': 'it\'s working'};
  }
  
}
