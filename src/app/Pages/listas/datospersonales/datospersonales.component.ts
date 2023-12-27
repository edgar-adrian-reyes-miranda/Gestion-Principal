import { PersonapiService } from './../../../Services/personapi.service';
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Personales} from "../../../Clases/personales";
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datospersonales',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, ],
  templateUrl: './datospersonales.component.html',
  styleUrl: './datospersonales.component.css'
})
export class DatospersonalesComponent implements OnInit{
  personal:Personales[]=[];
  

  constructor(private PersonapiService:PersonapiService, private router:Router){}

  ngOnInit(): void {
    this.PersonapiService.getperson().subscribe(
      (data:Personales[])=>{
        console.log('Datos de personales', data);
        this.personal= data;
        
      },
      error => console.error('Error al obtener datos personales', error),
      () => console.log('Obtencion de personales completo')
    );
  }

  eliminarpersonal(id:number | undefined){
    if(typeof id === 'number'){
      this.PersonapiService.eliminarPersonales(id).subscribe(
        res=>{
          console.log('Dato personal eliiminado exitoso');
          this.actualizarListaPersonal();
        },
        error=> console.error('error al eliminar al dato personal', error)
      );
    }else{
      console.error('ID de personal no valido', id);
    }
  }
  private actualizarListaPersonal() {
      this.PersonapiService.getperson().subscribe(
        (data:Personales[])=>{
          console.log('Datos de personales actualizados', data);
        },
        error=> console.error('Error al obtener el dato personal', error),
        ()=> console.error('Actualizacion de dato personales completo')
      )
  }


  editarpersonal(id_person:number| undefined){
    if(id_person !== undefined){
      this.router.navigate(['/Datopersonal/forms/', id_person]);
    }else{
      console.error('ID  de personal no valido', id_person);
    }
  }

}
