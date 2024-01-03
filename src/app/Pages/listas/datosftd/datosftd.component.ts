import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ftd} from "../../../Clases/ftd";
import {Router, RouterLink} from "@angular/router";
import { FtdapiService } from '../../../Services/ftdapi.service';

@Component({
  selector: 'app-datosftd',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './datosftd.component.html',
  styleUrl: './datosftd.component.css'
})
export class DatosftdComponent implements  OnInit{
  ftd:Ftd[]=[];

    constructor(private FtdapiService:FtdapiService, private route:Router){}
  ngOnInit(): void {
    this.FtdapiService.getFtd().subscribe(
      (data: Ftd[]) => {
        console.log('Datos FTD', data);
        this.ftd = data;
      },
      (error) => console.error('Error al obtener los datos de ftd', error),
      () => console.log('Obtencion de datos de FTD complata')
    );

  }

  eliminarFTD(id: number | undefined){
    if (id) {
      this.FtdapiService.eliminarFtd(id).subscribe(
        (res) => {
          console.log('Datos de FTD eliminado exitoso');
          this.actualizarFTD();
        },
        (error) => console.log('Error en eliminar el ftd',error)
        );
    } else {
      console.error('id de FTD NO VALIDO', id);
      }
  }
   private actualizarFTD() {
     this.FtdapiService.getFtd().subscribe(
       (data: Ftd[]) => {
         console.log('Datos de FTD', data);
         this.ftd = data;
       },
       (error) => console.error('Error al obtener los datos FTD', error),
       ()=>console.log('Actualizcion de datos FTD completo')
     );
   }

  editarFTD(id_ftd:number | undefined) {
    if (id_ftd) {
      this.route.navigate(['/lista-ftd']);
    } else {
      console.error('ID de ftd no valido');
      }
   }

}
