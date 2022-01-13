import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  username: string = ''

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(){
    this.userService.addUser(this.username)
    console.log('All in add user : ', this.userService.users);
    
    // this.username = ''
  }


  viewUsers(){
    this.router.navigate(['/allusers'])
  }

}
