import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { LoginPayload } from '../authentication/dto/login-payload.dto';
import { User } from '../users/user.entity';
import { UserInterface } from './user.interface';
import UserRepository from './user.repository';
import {from} from 'rxjs';
import {switchMap, map, catchError} from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(
    private userRepository:UserRepository,
    private authService: AuthenticationService
  ){}

  getByEmail(email:string): Promise<User|null> {
    return this.userRepository.findOne({
      email: email
    });
  }

  async login(user: LoginPayload) {
    let userResponse = await this.getByEmail(user.email);

    if(!userResponse) {
        throw new NotFoundException('user not found');
    }

    let isPasswordValid = await this.authService.comparePasswords(user.password, userResponse.password);

    if(!isPasswordValid) {
      throw new NotFoundException('user not found');
    }

    return {
        auth_token: await this.authService.generateJWT(userResponse)
    }
}

  create(user:UserInterface): Observable<UserInterface> {
      return this.authService.hashPassword(user.password).pipe(
        switchMap((passwordString: string) => {
          let newUser = new User();

          newUser.email = user.email;
          newUser.name = user.name;
          newUser.github = user.github;
          newUser.password = passwordString;

          return from(this.userRepository.save(newUser)).pipe(
            map((user:UserInterface) => {
              const {password, ...result} = user;
              return result;
            }),
            catchError(error => throwError(error))
          );
        })
      )
  }

}
