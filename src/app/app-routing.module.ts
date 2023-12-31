import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './Pages/informacion/informacion.component';
import { PlanesEducativosComponent } from './Pages/extras/planes-educativos/planes-educativos.component';
import { GruposComponent } from './Pages/extras/grupos/grupos.component';
import { PerfilamientoComponent } from './Pages/extras/perfilamiento/perfilamiento.component';
import { ModalidadComponent } from './Pages/extras/modalidad/modalidad.component';
import { DatosescolaresComponent } from './Pages/listas/datosescolares/datosescolares.component';
import { DatospersonalesComponent } from './Pages/listas/datospersonales/datospersonales.component';
import { DatosingresosComponent } from './Pages/listas/datosingresos/datosingresos.component';
import { DatosftdComponent } from './Pages/listas/datosftd/datosftd.component';
import { ExcelComponent } from './Pages/Reportes/excel/excel.component';
import { PdfComponent } from './Pages/Reportes/pdf/pdf.component';
import { AlumnosComponent } from './Pages/Reportes/alumnos/alumnos.component';
import { FrontEndComponent } from './Pages/Cursos/front-end/front-end.component';
import { BackendComponent } from './Pages/Cursos/backend/backend.component';
import { InfraestructuraComponent } from './Pages/Cursos/infraestructura/infraestructura.component';
import { GitComponent } from './Pages/Cursos/git/git.component';
import { GenerosComponent } from './Pages/Reportes/generos/generos.component';
import {TutoresComponent} from "./Pages/extras/tutores/tutores.component";
import {HttpClientModule} from "@angular/common/http";
import {PeriodoComponent} from "./Pages/extras/periodo/periodo.component";
import {LoginComponent} from "./Usuario/login/login.component";
import {PortadaComponent} from "./Inicio/portada/portada.component";
import {AdminComponent} from "./Admins/admin/admin.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RegistroadminComponent} from "./Admins/registroadmin/registroadmin.component";
import {RegistrousuComponent} from "./Usuario/registrousu/registrousu.component";
import {MenuComponent} from "./Pages/menu/menu.component";
import {PersonalesComponent} from "./Formulario/personales/personales.component";
import {EscolaresComponent} from "./Formulario/escolares/escolares.component";
import {IngresoComponent} from "./Formulario/ingreso/ingreso.component";
import {FTDComponent} from "./Formulario/ftd/ftd.component";
import { UniversidadesComponent } from './Pages/extras/universidades/universidades.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaUniversidadComponent } from './Formulario/nueva-universidad/nueva-universidad.component';
import { NuevoGrupoComponent } from './Formulario/nuevo-grupo/nuevo-grupo.component';
import { NuevoPerfilamientoComponent } from './Formulario/nuevo-perfilamiento/nuevo-perfilamiento.component';
import { TramiteComponent } from './Pages/extras/tramite/tramite.component';
import { BorradosComponent } from './Pages/borrados/borrados.component';
import {NuevoTramiteComponent} from "./Formulario/nuevo-tramite/nuevo-tramite.component";
import {EscolarComponent} from "./Pages/extras/escolar/escolar.component";



const routes: Routes = [

  /*Frontal*/
  {path:'',component:PortadaComponent, pathMatch:'full',redirectTo:''},
  {path:'Login', component:LoginComponent,pathMatch:'full'},
  {path:'LoginAdmin',component:AdminComponent, pathMatch:'full'},
  {path:'Registro-Admin',component:RegistroadminComponent,pathMatch:'full'},
  {path:'Registro-usuario',component:RegistrousuComponent, pathMatch:'full'},

  /*Inicio */
  {path:'Menu', component:MenuComponent,pathMatch:'full'},

  /*Formularios*/
  {path:'Datos-personales',component:PersonalesComponent,pathMatch:'full'},
  {path:'Datos-personales/forms/:id_person', component:PersonalesComponent, pathMatch:'full'},
  {path:'Datos-escolares', component:EscolaresComponent,pathMatch:'full'},
  {path:'Datos-escolares/forms/:id_escolar', component:EscolaresComponent, pathMatch:'full'},
  {path:'Datos-Ingresos', component:IngresoComponent,pathMatch:'full'},
  {path:'Datos-Ingresos/forms/:id_ingreso', component:IngresoComponent, pathMatch:'full'},
  {path:'Datos-FTD', component:FTDComponent,pathMatch:'full'},
  {path:'Datos-FTD/forms/:id_ftd', component:FTDComponent, pathMatch:'full'},
  {path:'Nueva-Universidad', component:NuevaUniversidadComponent, pathMatch:'full'},
  {path:'Nueva-Universidad/forms/:id_uni', component:NuevaUniversidadComponent, pathMatch:'full'},
  {path:'Nuevo-grupo', component:NuevoGrupoComponent, pathMatch:'full'},
  {path:'Nuevo-grupo/forms/:id_grupo', component:NuevoGrupoComponent, pathMatch:'full'},
  {path:'Nuevo-perfil', component:NuevoPerfilamientoComponent, pathMatch:'full'},
  {path:'Nuevo-perfil/forms/:id_perfilamiento', component:NuevoPerfilamientoComponent, pathMatch:'full'},
  {path:'Nuevo-Tramite', component:NuevoTramiteComponent, pathMatch:'full'},
  {path:'Nuevo-Tramite/forms/:id_tramite', component:NuevoTramiteComponent, pathMatch:'full'},

  /*Listas*/
  {path:'lista-personales',component:DatospersonalesComponent,pathMatch:'full'},
  {path:'lista-escolares',component:DatosescolaresComponent,pathMatch:'full'},
  {path:'lista-ingresos',component:DatosingresosComponent,pathMatch:'full'},
  {path:'lista-ftd',component:DatosftdComponent,pathMatch:'full'},


  /*extras*/
  {path:'Universidades', component:UniversidadesComponent,pathMatch:'full'},
  {path:'Planes-Educativos',component:PlanesEducativosComponent, pathMatch:'full'},
  {path:'Modalidad',component:ModalidadComponent, pathMatch:'full'},
  {path:'Grupos',component:GruposComponent, pathMatch:'full'},
  {path:'Perfilamiento',component:PerfilamientoComponent, pathMatch:'full'},
  {path:'tutor',component:TutoresComponent,pathMatch:'full'},
  {path:'Periodo',component:PeriodoComponent,pathMatch:'full'},
  {path:'Tramite',component:TramiteComponent, pathMatch:'full'},
  {path:'Escolar', component:EscolarComponent, pathMatch:'full'},

  /*Reportes*/
  {path:'Excel', component:ExcelComponent, pathMatch:'full'},
  {path:'PDF', component:PdfComponent, pathMatch:'full'},
  {path:'Alumnos', component:AlumnosComponent, pathMatch:'full'},
  {path:'Genero', component:GenerosComponent, pathMatch:'full'},


  /*Cursos*/
  {path:'Front-End',component:FrontEndComponent, pathMatch:'full'},
  {path:'Backend',component:BackendComponent, pathMatch:'full'},
  {path:'Infraestructura', component:InfraestructuraComponent,pathMatch:'full'},
  {path:'Git',component:GitComponent,pathMatch:'full'},


  /*informacion*/
  {path:'informacion', component:InformacionComponent,pathMatch:'full'},

  /*Usuario*/
  {path:'Usuario',component:LoginComponent,pathMatch:'full'},

  /*borrados logicos */
  {path:'Borrados', component:BorradosComponent, pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule,
  RouterLink,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
