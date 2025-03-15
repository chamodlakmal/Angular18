import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: Array<User> = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
    { id: 3, name: 'Smith' },
    { id: 4, name: 'Alex' },
    { id: 5, name: 'Kamal' }
  ]

  constructor() { }

  getUserById(id: number): User | undefined {
    console.log('getUserById', id);
    console.log('typeof id', typeof id);
    let user = this.users.find(user => user.id === id);
    console.log('user', user);
    return user;
  }

  getUsers(): Array<User> {
    return this.users;
  }
}

interface User {
  id: number;
  name: string;
}
