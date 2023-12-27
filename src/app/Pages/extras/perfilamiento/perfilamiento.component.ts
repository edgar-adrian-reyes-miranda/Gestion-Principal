import { PerflapiService } from './../../../Services/perflapi.service';
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Perfilamiento} from "../../../Clases/perfilamiento";
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfilamiento',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, ],
  templateUrl: './perfilamiento.component.html',
  styleUrl: './perfilamiento.component.css'
})
export class PerfilamientoComponent implements  OnInit{
  perfilamiento:Perfilamiento[]=[];

  constructor(private Perflapi:PerflapiService, private router:Router){}

  ngOnInit(): void {
    this.Perflapi.getPerfilamiento().subscribe(
      (data:Perfilamiento[])=>{
        this.perfilamiento=data;
        console.log(this.perfilamiento)
      }, 
      error =>'No se encontro ninguna lista');
  }

  eliminarperfil(id: number | undefined) {
    if(typeof id === 'number'){
      this.Perflapi.eliminarPerfilamiento(id).subscribe(
        res=>{
          console.log('Perfil eliminado con exito');
          this.actualizarListaperfil();
        },
        error => console.log('Error al eliminar el perfil', error.error)
      );
    }else{
      console.error('ID de perfil no valido', id);
    }
    }

  private actualizarListaperfil() {
    this.Perflapi.getPerfilamiento().subscribe(
      (data: Perfilamiento[])=>{
        console.log('Datos de perfil actualizados', data);
        this.perfilamiento= data;
      },
      error => console.error('Error al obtener perfil', error),
      ()=> console.log('Actualizacion de perfil completa')
    );
  }

  editarPerfil(id_perfil:number | undefined){
  if(id_perfil !== undefined){
      this.router.navigate(['/Nuevo-perfil/forms/', id_perfil]);
    }else{
      console.log('ID de perfil no valido', id_perfil);
    }
  }

}
