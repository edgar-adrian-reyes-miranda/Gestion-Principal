import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './Pages/informacion/informacion.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { UniversidadesComponent } from './Pages/extras/universidades/universidades.component';
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
import { RegistroadminComponent } from './Pages/Inicio/registroadmin/registroadmin.component';
import { RegistroaspiranteComponent } from './Pages/Inicio/registroaspirante/registroaspirante.component';
import { GenerosComponent } from './Pages/Reportes/generos/generos.component';


const routes: Routes = [
  /*Inicio */
  {path:'Registro-Administrador',component:RegistroadminComponent,pathMatch:'full'},
  {path:'Registro-Aspirante',component:RegistroaspiranteComponent,pathMatch:'full'},
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
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
