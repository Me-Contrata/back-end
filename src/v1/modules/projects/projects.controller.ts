import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import {ProjectsService} from './projects.service'

@Controller()
export class ProjectsController {
    constructor(private readonly project: ProjectsService) {}

    @Get('/projects')
    @UseGuards(JwtAuthGuard)
    list() {
        return this.project.list();
    }

    @Post('/projects')
    create(@Body() data) {
        return this.project.list();
    }
}
