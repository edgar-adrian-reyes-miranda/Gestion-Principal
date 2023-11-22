import { AdminWelcomComponent } from './pages/admin/welcom/admin-welcom/admin-welcom.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingupComponent } from './pages/singup/singup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DashboardUserComponent } from './pages/user/dashboard-user/dashboard-user.component';
import { AuthGuard } from 'src/app/services/Auth.Guard';




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

  {path:'AdminWelcomComponent',
  component:AdminWelcomComponent,
  pathMatch: 'full',
 
  
  },

  {path:'user-dasboard',
  component:DashboardUserComponent,
  pathMatch:'full',
 
}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
