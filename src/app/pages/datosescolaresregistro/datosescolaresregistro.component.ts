import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-datosescolaresregistro',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './datosescolaresregistro.component.html',
  styleUrl: './datosescolaresregistro.component.css'
})
export class DatosescolaresregistroComponent implements OnInit{
  ngOnInit(): void {
      }
      correo_inst!:string;
    matricula!:string;
    carreras!:string;
    universidades!:string;

    constructor(private escolaresservices: LoginService){}

    registroEscolar(){
      const user={correo_inst:this.correo_inst, matricula:this.matricula,carreras:this.carreras,universidades :this.universidades};
      this.escolaresservices.registroEscolar(user).subscribe(data =>{
      });
    }

}
