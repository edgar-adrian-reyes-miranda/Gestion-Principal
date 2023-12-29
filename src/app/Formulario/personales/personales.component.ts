import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, } from "@angular/router";
import { PersonapiService } from "../../Services/personapi.service";
import { Personales } from 'src/app/Clases/personales';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-personales',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './personales.component.html',
  styleUrl: './personales.component.css'
})
export class PersonalesComponent implements OnInit {
  person: Personales = new Personales();

  constructor(private personapi: PersonapiService, private router: Router, private activedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarpersonales();
  }

  cargarpersonales() {
    this.activedroute.params.subscribe(params => {
      let id = params['id_person']
      if (id) {
        this.personapi.getPersonales(id).subscribe((person) => this.person = person)
      }
    })
  }

  guardar(): void {
    this.personapi.guardarPersonales(this.person)
      .subscribe(personales => {
        this.router.navigate(['/lista-personales'])
        console.log('Nuevo datos persoanels', 'Nuevo ${this.person.nombre}craado con exito ')
      });
  }

  editarPersonaes(): void {
    this.personapi.modificarPersonales(this.person).subscribe(
      personales => {
        this.router.navigate(['/lista-personales'])
        console.log('Personales actualizados', 'Personales ${this.person.nombre} actualizados con exito')
      }, error => 'Error en actualizar');

  }
}
