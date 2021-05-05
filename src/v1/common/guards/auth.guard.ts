import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/v1/modules/users/users.service';
import {ROLES_KEY} from '../decorators/roles.decorator'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private reflector: Reflector, private readonly userService: UsersService){}
  
  async canActivate(
    context: ExecutionContext,
  ) {
    const bodyData = context.switchToHttp().getRequest().body;
    const roles = this.reflector.get<string>(ROLES_KEY, context.getHandler())

    //TODO: check if return false can generate future problems with public routes
    if(!roles) {
      return false;
    }

    const user = await this.userService.getValidUser(bodyData.email, roles[0]);
    console.log(user)
    return user ? true : false;
  }
}
