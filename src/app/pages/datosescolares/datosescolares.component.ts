import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DatosEscolares } from 'src/app/services/datosescolares';

@Component({
  selector: 'app-datosescolares',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './datosescolares.component.html',
  styleUrl: './datosescolares.component.css'
})
export class DatosescolaresComponent implements OnInit{
  datosescolares:DatosEscolares[]=[];

constructor(private escolaresservice: LoginService){}
  ngOnInit(): void {
    this.loadescolar();
  }
  loadescolar():void{
    this.escolaresservice.getDatosEscolares().subscribe((data: DatosEscolares[])=>
    {
      this.datosescolares = data
    },
    error=>console.log('Error al cargar los datos escolares'));
  }
  deleteEscolar(id: number): void {
    this.escolaresservice.deletePersonal(id).subscribe(() => {
      this.loadescolar();
    });
  }

}
