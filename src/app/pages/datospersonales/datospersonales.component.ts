import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DatosPersonales } from 'src/app/services/DatosPersonales';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-datospersonales',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './datospersonales.component.html',
  styleUrl: './datospersonales.component.css'
})
export class DatospersonalesComponent implements OnInit{
 ngOnInit(): void {
  this.loadDatosPersonales();
 }

 datospersonales:DatosPersonales[]=[];
constructor(private datosPersonalesService: LoginService){}

 loadDatosPersonales(): void {
  this.datosPersonalesService.getDatosPersonales().subscribe(
    (data: DatosPersonales[]) => {
      this.datospersonales = data;
    },
    error => {
      console.error('Error al cargar datos personales:', error);
    }
  );
}
deletepersonal(id: number): void {
  this.datosPersonalesService.deletePersonal(id).subscribe(() => {
    this.loadDatosPersonales();
  });
}
}
