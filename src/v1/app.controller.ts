import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/hello')
  getHello(@Req() request: Request) {
    console.log(request.body)
    return this.appService.getHello();
  }
}