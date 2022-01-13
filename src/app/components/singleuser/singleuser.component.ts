import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

  id: string = ''
  name: string = ''

  users : {id:number, name: string}[] = []

  user: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    console.log('Users in constructor : ', this.userService.getUsers());
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.users = this.userService.users
    this.user = this.users[parseInt(this.id)]

    console.log('All users : ', this.userService.users);
    
    console.log('User : ', this.users[parseInt(this.id)]);
    

  }

}
