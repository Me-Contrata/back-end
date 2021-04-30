import { Injectable,  } from '@nestjs/common';
import { Role } from './common/enums/role.enum';

@Injectable()
export class AppService {
  getHello(...roles: Role[]): Array<any> {
    return ['alisson', 1, 'Maria', {name: 'Alisson'}]
  }
}
