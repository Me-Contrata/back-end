import { Injectable } from '@nestjs/common';
import { LoginPayload } from '../authentication/dto/login-payload.dto';
import { User } from '../users/user.entity';
import UserRepository from './user.repository';

@Injectable()
export class UsersService {

  constructor(private userRepository:UserRepository){}

  async getEmailAndPassword(userLogin:LoginPayload): Promise<User|null> {
    //@TODO: remove static definition of status
    userLogin.is_active = true;
    return this.userRepository.findOne(userLogin);
  }

  async create(user:User):Promise<User> {
    return this.userRepository.save(user);
  }

}
