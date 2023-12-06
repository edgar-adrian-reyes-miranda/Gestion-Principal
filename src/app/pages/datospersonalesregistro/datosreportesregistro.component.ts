import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from 'src/app/services/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-datosreportesregistro',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './datosreportesregistro.component.html',
  styleUrl: './datosreportesregistro.component.css'
})
export class DatosreportesregistroComponent implements OnInit {
  correo!:string;
  nombre!:string;
  p_apellido!:string;
  s_apellido!:string;
  telefonocasa!:string;
  curp!:string;
  
  ngOnInit(): void {    
  }
constructor(private userService:LoginService){}

registropersonal() {
    const user = {correo :this.correo,nombre :this.nombre,p_apellido :this.p_apellido, telefonocasa :this.telefonocasa,s_apellido :this.s_apellido,curp :this.curp};
    this.userService.registropersonal(user).subscribe(data => {
      });
  }

}
