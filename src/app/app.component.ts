import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  id: number = 0
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
  }

}
