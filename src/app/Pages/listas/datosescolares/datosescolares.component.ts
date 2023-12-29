import { EscolarnapiService } from './../../../Services/escolarnapi.service';
import { Escolares } from './../../../Clases/escolares';
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-datosescolares',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule,],
  templateUrl: './datosescolares.component.html',
  styleUrl: './datosescolares.component.css'
})
export class DatosescolaresComponent implements OnInit{
  Escolares:Escolares[]=[];

  constructor(private EscolarnapiService:EscolarnapiService, private router:Router){}

  ngOnInit(): void {
    this.EscolarnapiService.getEscolares().subscribe(
      (data:Escolares[])=>{
        console.log('Datos de escolares', data);
        this.Escolares=data;
      },
      error => console.error('Error al obtener los datos Escolares', error),
      ()=>console.log('Obtencion de escoalres completo')
    );
  }
  
  eliminarEscolar(id:number | undefined){
    if(typeof id ==='number'){
      this.EscolarnapiService.eliminarEscolares(id).subscribe(
        res=>{
          console.log('Dato escolar eliminado exitoso');
          this.actualizarEscolar();
        },
        error=> 
        console.error('errorr al eliminar el dato escolar', error)
      );
          }else{
            console.error('ID de escolar no valido', id);
          }
  }
   private actualizarEscolar(){
    this.EscolarnapiService.getEscolares().subscribe(
      (data:Escolares[])=>{
        console.log('Datos escolares actualizados', data);
      },
      error=> console.error('Error al obtener el dato escolar', error),
      ()=> console.error('Actualizacion de dato escolar completo')
    );
  }

  editarEscolar(id_escolar:number | undefined){
    if(id_escolar !== undefined){
      this.router.navigate(['/Datos-escolares/forms/', id_escolar]);
    }else{
      console.error('ID de escolar', id_escolar);
    }
  }

}
