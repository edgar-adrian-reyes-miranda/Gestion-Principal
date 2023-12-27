import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {PersonapiService} from "../../Services/personapi.service";
import { Personales } from 'src/app/Clases/personales';


@Component({
  selector: 'app-personales',
  standalone: true,
  imports: [ RouterLink,RouterOutlet  ],
  templateUrl: './personales.component.html',
  styleUrl: './personales.component.css'
})
export class PersonalesComponent implements OnInit{
person:Personales[]=[];
 
Personales = {
  nombre:'string',
  p_apellido:'',
  s_apellido:'',
  curp:'',
  domicilio:'',
  estado:'',
  telefono:'',
  telefonocasa:'',
  correo:'',
}

constructor(private personapi:PersonapiService, private router:Router) {}

  ngOnInit(): void {
  }
  
}
