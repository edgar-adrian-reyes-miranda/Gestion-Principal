import { DatosreportesComponent } from './pages/datosreportes/datosreportes.component';
import { AdminGuardService } from './services/admin.guard.service';
import { AdminWelcomComponent } from './pages/admin/welcom/admin-welcom/admin-welcom.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingupComponent } from './pages/singup/singup.component';
import { DashboardUserComponent } from './pages/user/dashboard-user/dashboard-user.component';
import { NormalGuardService } from './services/normal.guard.service';
import { DatospersonalesComponent } from './pages/datospersonales/datospersonales.component';
import { DatosescolaresComponent } from './pages/datosescolares/datosescolares.component';
import { DatosingresoComponent } from './pages/datosingreso/datosingreso.component';
import { DatosftdComponent } from './pages/datosftd/datosftd.component';
import { DatosadministradoresComponent } from './pages/datosadministradores/datosadministradores.component';
import { DatosreportesregistroComponent } from './pages/datospersonalesregistro/datosreportesregistro.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DatosescolaresregistroComponent } from './pages/datosescolaresregistro/datosescolaresregistro.component';
import { DatosingresosregistroComponent } from './pages/datosingresosregistro/datosingresosregistro.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:'full', redirectTo:''},
  {path:'singup',component:SingupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent, pathMatch:'full'},
  {path:'AdminWelcomComponent',component:AdminWelcomComponent,pathMatch:'full'},
  {path:'datos-personales', component:DatospersonalesComponent,pathMatch:'full'},
  {path:'datos-escolares',component:DatosescolaresComponent,pathMatch:'full'},
  {path:'datos-ingreso',component:DatosingresoComponent,pathMatch:'full'},
  {path:'datos-ftd',component:DatosftdComponent,pathMatch:'full'},
  {path:'generador-reportes',component:DatosreportesComponent,pathMatch:'full'},
  {path:'administradores',component:DatosadministradoresComponent,pathMatch:'full'},
  {path:'datos-personales-registro',component:DatosreportesregistroComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,pathMatch:'full'},
  {path:'datos-personales-registro', component:DatosreportesregistroComponent,pathMatch:'full'},
  {path:'datos-escolares-registro', component:DatosescolaresregistroComponent, pathMatch:'full'},
  {path:'datos-ingreso-registro',component:DatosingresosregistroComponent, pathMatch:'full'},
  {path:'usuario',component:DashboardUserComponent,pathMatch:'full'},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
