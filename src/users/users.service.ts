import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'First User',
      email: 'firstuser@doheneyserives.com',
      password: 'firstuser@123',
    },
    {
      id: 2,
      name: 'Second User',
      email: 'seconduser@doheneyserives.com',
      password: 'seconduser@123',
    },
  ];

  // check if a user with the email exist
  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
