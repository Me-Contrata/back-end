import { Injectable } from '@nestjs/common';
import User from './dto/user.dto'

@Injectable()
export class UsersService {
      // temp json while database is not implemented
  private readonly users: Array<User> = [
    {
      id: 1,
      type: 'aventureiro',
      name: 'Alisson Rodrigues',
      email: 'alisson@hotmail.com',
      password: '123456'
    },
    {
      id: 2,
      type: 'explorador',
      name: 'Alisson Rodrigues',
      email: 'explorador@hotmail.com',
      password: '123456'
    }
  ];

  async getValidUser(email: string, type:string): Promise<User | null> {
    return this.users.find(user => user.email === email && user.type === type);
  }

  async findOne(email:string): Promise<User|null> {
    return this.users.find(us => us.email === email);
  }
}
