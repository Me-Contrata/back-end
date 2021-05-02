import { Injectable } from '@nestjs/common';
import User from './../../interfaces/user.interface'

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
    }
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
