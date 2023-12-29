import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Tramite } from 'src/app/Clases/tramite';
import { Perfilamiento } from '../../Clases/perfilamiento';
import { Modalidad } from 'src/app/Clases/modalidad';
import { Turno } from 'src/app/Clases/turno';
import { Horario } from 'src/app/Clases/horario';
import { TramiteService } from '../../Services/tramite.service';
import { PerflapiService } from '../../Services/perflapi.service';
import { ModapiService } from '../../Services/modapi.service';
import { TurnapiService } from '../../Services/turnapi.service';
import { HorapiService } from '../../Services/horapi.service';
import { Ingresos } from 'src/app/Clases/ingresos';
import { IngresoapiService } from '../../Services/ingresoapi.service';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule,],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent implements OnInit {

  Tramites: Tramite[] = [];
  Perfilamiento: Perfilamiento[] = [];
  modalidad: Modalidad[] = [];
  turno: Turno[] = [];
  horario: Horario[] = [];
  ingreso: Ingresos = new Ingresos();

  constructor(
    private IngresoapiService: IngresoapiService, private route: Router,
    private TramiteService: TramiteService, private PerflapiService: PerflapiService, private ModapiService: ModapiService,
    private TurnapiService: TurnapiService, private HorapiService: HorapiService
    , private activedrouter: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargarIngresos();
    this.TramiteService.listatramite().subscribe((tramites) => this.Tramites = tramites);
    this.PerflapiService.getPerfilamiento().subscribe((perfilamiento) => this.Perfilamiento = perfilamiento);
    this.HorapiService.getHorario().subscribe((horario) => this.horario = horario);
    this.ModapiService.getModalidades().subscribe((modalidad) => this.modalidad = modalidad);
    this.TurnapiService.getturnos().subscribe((TURNO) => this.turno = TURNO);

  }
  cargarIngresos() {
    this.activedrouter.params.subscribe(params => {
      let id = params['id:ingreso']
      if (id) {
        this.IngresoapiService.getIngresos().subscribe((tramite) => this.ingreso = this.ingreso);
      }
    })
  }
  editaringreso() {
    this.IngresoapiService.modificarIngresos(this.ingreso).subscribe(
      ingresos => {
        this.route.navigate(['/lista-ingresos'])
        console.log('Ingresos actualizados', 'Ingresos ${this.ingreso.cv}actualizado con exito')
      }, error => 'Error en actualizar');
  }

  guardar() {
    this.IngresoapiService.guardarIngresos(this.ingreso).subscribe(
      ingresos => {
        this.route.navigate(['/lista-ingresps'])
        console.log('Nuevo ingreso', 'Nuevo ${this.ingreso.cv} guardados con exito')
      });
  }

}
