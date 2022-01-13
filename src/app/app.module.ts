import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AllusersComponent } from './components/allusers/allusers.component';
import { UserComponent } from './components/user/user.component';
import { SingleuserComponent } from './components/singleuser/singleuser.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    AllusersComponent,
    UserComponent,
    SingleuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
