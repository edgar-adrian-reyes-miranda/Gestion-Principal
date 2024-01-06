import { PersonapiService } from './../../../Services/personapi.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personales } from '../../../Clases/personales';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Genero } from "../../../Clases/genero";
import { GeneapiService } from '../../../Services/geneapi.service';

@Component({
  selector: 'app-datospersonales',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule,],
  templateUrl: './datospersonales.component.html',
  styleUrl: './datospersonales.component.css',
})
export class DatospersonalesComponent implements OnInit {
  personal: Personales[] = [];
  genero: Genero[] = [];
  constructor(
    private PersonapiService: PersonapiService,
    private router: Router,
    private GeneapiService: GeneapiService,
  ) { }

  ngOnInit(): void {
    this.PersonapiService.getperson().subscribe(
      (data: Personales[]) => {
        console.log('Datos de personales', data);
        this.personal = data;
      },
      (error) => console.error('Error al obtener datos personales', error),
      () => console.log('Obtención de personales completada')
    );

    this.GeneapiService.getGenero().subscribe(
      (data: Genero[]) => {
        console.log('datos de genero', data);
        this.genero = data;
      },
      (error) => console.error('Error al obtener datos de género', error),
      () => console.log('Obtención de género completada')
    );
  }



  eliminarpersonal(id: number | undefined) {
    if (id) {
      this.PersonapiService.eliminarPersonales(id).subscribe(
        (res) => {
          console.log('Dato personal eliminado exitoso');
          this.actualizarListaPersonal();
        },
        (error) => console.error('Error al eliminar el dato personal', error)
      );
    } else {
      console.error('ID de personal no válido', id);
    }
  }

  private actualizarListaPersonal() {
    this.PersonapiService.getperson().subscribe(
      (data: Personales[]) => {
        console.log('Datos de personales actualizados', data);
        this.personal = data;
      },
      (error) => console.error('Error al obtener los datos personales', error),
      () => console.log('Actualización de datos personales completada')
    );
  }

  editarpersonal(id_person: number | undefined) {
    if (id_person) {
      this.router.navigate(['/Datos-personales/forms/', id_person]);
    } else {
      console.error('ID de personal no válido', id_person);
    }
  }
}
