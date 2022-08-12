import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  users:User[] =[
    {
      id: 1,
      name: 'Danniel',
      email: 'danniel@gmail.com',
      password: "123456"
    },
    {
      id: 2,
      name: 'Evelyn',
      email: 'evelyn@gmail.com',
      password: "123456"
    },
    {
      id: 3,
      name: 'Pedro',
      email: 'pedro@gmail.com',
      password: "123456"
    }
  ]


  constructor() { }

  getUsers() {
    return this.users
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.password === password)

  }

}
