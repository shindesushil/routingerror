import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {

  users : {id:number, name: string}[] = []

  constructor() { }

  addUser(user: string){
    this.users.push({
      id: this.users.length,
      name: user
    })
  }

  getUsers() : any{
    return this.users
  }

}
