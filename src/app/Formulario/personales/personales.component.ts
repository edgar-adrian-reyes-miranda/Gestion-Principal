import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, } from "@angular/router";
import { PersonapiService } from "../../Services/personapi.service";
import { Personales } from 'src/app/Clases/personales';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Genero} from "../../Clases/genero";
import {GeneapiService} from "../../Services/geneapi.service";


@Component({
  selector: 'app-personales',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './personales.component.html',
  styleUrl: './personales.component.css'
})
export class PersonalesComponent implements OnInit {
  person: Personales = new Personales();
  genero:Genero[]=[];

  constructor(private personapi: PersonapiService,
              private router: Router,
              private activedroute: ActivatedRoute,
              private generoio:GeneapiService) { }

  ngOnInit():void {
    this.cargarpersonales();
    this.generoio.getGenero().subscribe((Genero)=>{
      console.log('Genero', Genero);
      this.genero = Genero;
    });
  }

  cargarpersonales():void {
    this.activedroute.params.subscribe((params) => {
      let id = params['id_person'];
      if (id) {
        this.personapi.getPersonales(id).subscribe(
          (person) => this.person = person,
          (error) => console.error('Error al cargar personales', error)
        );
      }
    });
  }

  guardar(): void {
    // Verificar si se ha seleccionado un género
    if (this.person.tipo_genero) {
      // Resto del código para guardar los datos
      this.personapi.guardarPersonales(this.person).subscribe(personales => {
        this.router.navigate(['/lista-personales']);
        console.log(`Nuevo dato personales ${this.person.nombre} creado con éxito. Género seleccionado: ${this.person.tipo_genero}`);
      });
    } else {
      console.error('Por favor, selecciona un género antes de guardar.');
    }
  }

  editarPersonaes() {
    this.personapi.modificarPersonales(this.person).subscribe(
      (personales) => {
        this.router.navigate(['/lista-personales']);
        console.log('Personales actualizados', `Personales ${this.person.nombre} actualizados con éxito`);
      },
      (error) => console.error('Error en actualizar', error)
    );
  }
}
