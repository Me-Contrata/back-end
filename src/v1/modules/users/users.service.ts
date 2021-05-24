import { Injectable } from '@nestjs/common';
import { LoginPayload } from '../authentication/dto/LoginPayload';
import { User } from '../users/user.entity';
import { UserDTO } from './dto/user.dto';
import UserRepository from './user.repository';

@Injectable()
export class UsersService {

  constructor(private userRepository:UserRepository){}

  async getEmailAndPassword(userLogin:LoginPayload): Promise<User|null> {
    userLogin.is_active = true;
    return this.userRepository.findOne(userLogin);
  }

  async create(user:User) {
    return this.userRepository.create(user);
  }
}
