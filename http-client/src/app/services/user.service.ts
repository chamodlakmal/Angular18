import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)

  constructor() { }

  fetchUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}

interface User {
  id: number,
  name: string
}
