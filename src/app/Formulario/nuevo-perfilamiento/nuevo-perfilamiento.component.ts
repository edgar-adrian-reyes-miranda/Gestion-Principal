import { PerflapiService } from './../../Services/perflapi.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Perfilamiento } from 'src/app/Clases/perfilamiento';

@Component({
  selector: 'app-nuevo-perfilamiento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule, ],
  templateUrl: './nuevo-perfilamiento.component.html',
  styleUrl: './nuevo-perfilamiento.component.css'
})
export class NuevoPerfilamientoComponent implements OnInit {
Perfilamiento: Perfilamiento= new Perfilamiento();

constructor(private PerflapiService:PerflapiService, private router:Router, private activedRouter:ActivatedRoute){}

ngOnInit(): void {
 this.cargarperfil();
}

cargarperfil():void{
  this.activedRouter.params.subscribe(params=>
    {
      let id= params['id_perfilamiento']
      if(id){
        this.PerflapiService.getPerfilamientoporid(id).subscribe((Perfil)=> this.Perfilamiento=Perfil)
      }
    })
}
editarPerfil():void {
    this.PerflapiService.modificarPerfilamiento(this.Perfilamiento).subscribe(
      perfil=>{
        this.router.navigate(['/Perfilamiento'])
        console.log('Perfil actualizado', ' Perfil ${this.Perfilamiento.nombre} actualizado con exito');
      },
      error=>'Error en actualizar'
    );
    
}
guardar():void {
  this.PerflapiService.guardarPerfilamiento(this.Perfilamiento).subscribe(
    perfil=>{
      this.router.navigate(['/Perfilamiento'])
      console.log('Nuevo perfil', 'Nuevo ${this.Perfilamiento.nombre} creado con exito')
    });
}

}
