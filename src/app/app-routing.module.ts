import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AllusersComponent } from './components/allusers/allusers.component';
import { SingleuserComponent } from './components/singleuser/singleuser.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', component: AdduserComponent},
  {path:'allusers', component: AllusersComponent},
  {path:'user', component: UserComponent},
  {path:'user/:id', component: SingleuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
