import { Body, Controller, Get, Post } from '@nestjs/common';
import {ProjectsService} from './projects.service'

@Controller()
export class ProjectsController {
    constructor(private readonly project: ProjectsService) {}

    @Get('/projects')
    list() {
        return this.project.list();
    }

    @Post('/projects')
    create(@Body() data) {
        return this.project.list();
    }
}
