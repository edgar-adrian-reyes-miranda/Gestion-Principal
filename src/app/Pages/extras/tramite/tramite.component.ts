import { TramiteService } from './../../../Services/tramite.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { Tramite } from 'src/app/Clases/tramite';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-tramite',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,ReactiveFormsModule,],
  templateUrl: './tramite.component.html',
  styleUrl: './tramite.component.css'
})
export class TramiteComponent implements OnInit{
Tramites: Tramite[]=[];

constructor(private TramiteService:TramiteService, private route:Router){}
  ngOnInit(): void {
    this.TramiteService.listatramite().subscribe(
      (data:Tramite[])=>{
        console.log('Datos de tramites',data)
        this.Tramites=data;
      },
      error=> console.error('No se encontro la lista de tramites', error),
      ()=> console.log('Obtencion de tramites completo')
    );
  }
  eliminarTramite(id:number| undefined){
  if (typeof id === 'number'){
    this.TramiteService.eliminarTramite(id).subscribe(res=>
    {
      console.log('Tramite Eliminado exitosamente');
      this.actualizarTramites();
    },
      error=> console.error('Error al eliminar el tramite',error.error));
  }else {
    console.error('ID de Tramite no valido',id);
  }
  }


  private actualizarTramites() {
    this.TramiteService.listatramite().subscribe(
      (data:Tramite[])=>{
        console.log('Datos de Tramite actualizados', data);
        this.Tramites= data;
    },
      error=> console.error('Error al obtener los Tramites', error),
      ()=>console.log('Actualizacion de Tramites completa')
    );

  }

  editarTramite(id_tramite:number| undefined){
  if (id_tramite !== undefined){
    this.route.navigate(['/Nuevo-Tramite/forms/', id_tramite]);
  }else{
    console.error('ID de tramite no valido', id_tramite);
  }
  }

}
