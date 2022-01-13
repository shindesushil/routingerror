import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users : {id:number, name: string}[] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.users = this.userService.users
  }

}
