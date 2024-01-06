import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PleduapiService} from "../../Services/pleduapi.service";

@Component({
  selector: 'app-borrados',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './borrados.component.html',
  styleUrl: './borrados.component.css'
})
export class BorradosComponent implements  OnInit{

  planes:any[]=[];

  constructor(private planEdu:PleduapiService) {
  }

  ngOnInit(){
    this.cargarplanes();
  }

  private cargarplanes() {
    this.planEdu.getPlanesedu().subscribe(
      (planes)=>{
        this.planes= planes;
      },
      (error)=>{
        console.error('Error al cargar los planes', error);
      }
    )
  }

  softDeletePlan(id:number){
    this.planEdu.softDeletePlanEducativo(id).subscribe(
      ()=>{
        console.log('Eliminado suave exitosa');
        this.cargarplanes();
      },
      (error)=>{
        console.error('Error al eliminar suavemente', error);
      }
    )
  }

  restaurarPlan(id:number){
    this.planEdu.restaurarSoft(id).subscribe(
      ()=>{
        console.log('Restauracion exitosa');
        this.cargarplanes();
      },
      (error)=>{
        console.error('Error al restaurar', error);
      }
    )
  }
}
