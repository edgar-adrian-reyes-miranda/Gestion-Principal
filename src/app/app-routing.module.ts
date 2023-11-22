import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingupComponent } from './pages/singup/singup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DashboardUserComponent } from './pages/user/dashboard-user/dashboard-user.component';





const routes: Routes = [
  {path: '', 
  component:HomeComponent,
   pathMatch:'full'},
  {path:'singup',

   component:SingupComponent, 
   pathMatch:'full'},
   
  {path:'login', 
  component:LoginComponent, 
  pathMatch:'full'},

  {path:'admin',
  component:DashboardComponent,
  canActivate:[],
  
  },

  {path:'user-dasboard',
  component:DashboardUserComponent,
  pathMatch:'full',
  canActivate:[]
}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
