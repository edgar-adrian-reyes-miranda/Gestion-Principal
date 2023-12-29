import { CommonModule } from '@angular/common';
import { Universidad } from './../../Clases/universidad';
import { Component, OnInit } from '@angular/core';
import { FormsModule,  ReactiveFormsModule,  Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UnivapiService } from 'src/app/Services/univapi.service';

@Component({
  selector: 'app-nueva-universidad',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule,CommonModule,],
  templateUrl: './nueva-universidad.component.html',
  styleUrl: './nueva-universidad.component.css'
})
export class NuevaUniversidadComponent implements OnInit {
  Universidad: Universidad = new Universidad();
  
  constructor(private uniapi: UnivapiService, private router: Router, private activaRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.cargarUniversidad();
  }

cargarUniversidad():void{
  this.activaRoute.params.subscribe(params=>
    {
      let id = params['id_uni']
      if (id){
        this.uniapi.getUniversidadesporid(id).subscribe((universidad)=> this.Universidad=universidad)      }
    })
}

guardar():void{
  this.uniapi.guardarUni(this.Universidad).subscribe(universidad =>{ 
      this.router.navigate(['/Universidades'])
      console.log('Nueva Universidad', 'Nueva ${this.Universidad.nombre} creado con exito')
    });
}

editarUniversidad():void {
this.uniapi.modificarUni(this.Universidad).subscribe(
  universidad=>{
    this.router.navigate(['/Universidades'])
    console.log('Universidad actualizada', 'Universidad ${this.Universidad.nombre} actualizada con exito');
  },
  error=>'Error en actualizar');
}

}

