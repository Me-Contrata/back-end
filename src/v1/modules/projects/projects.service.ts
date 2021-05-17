import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {

    async list() {
        return ['proj1', 'proj2'];
    }
}
