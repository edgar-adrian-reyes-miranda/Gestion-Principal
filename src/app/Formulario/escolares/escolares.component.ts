import { ModescapiService } from '../../Services/modescapi.service';
import { PerioapiService } from './../../Services/perioapi.service';
import { PleduapiService } from './../../Services/pleduapi.service';
import { UnivapiService } from './../../Services/univapi.service';
import { Escolares } from './../../Clases/escolares';
import { CommonModule } from '@angular/common';
import { EscolarnapiService } from './../../Services/escolarnapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Universidad } from 'src/app/Clases/universidad';
import { Planesedu } from 'src/app/Clases/planesedu';
import { Periodo } from 'src/app/Clases/periodo';
import { ModEscolares } from 'src/app/Clases/ModEscolares';

@Component({
  selector: 'app-escolares',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './escolares.component.html',
  styleUrl: './escolares.component.css',
})
export class EscolaresComponent implements OnInit {
  escolar: Escolares = new Escolares();
  universidades: Universidad[] = [];
  planes: Planesedu[] = [];
  periodos: Periodo[] = [];
  modalidadesEsc: ModEscolares[] = [];

  constructor(
    private EscolarnapiService: EscolarnapiService,
    private route: Router,
    private UnivapiService: UnivapiService,
    private actived: ActivatedRoute,
    private PleduapiService: PleduapiService,
    private PerioapiService: PerioapiService,
    private ModEscapiService: ModescapiService,
  ) {}

  ngOnInit() {
    // @ts-ignore
    this.cargarescolar();
    this.UnivapiService.getUniversidadeslista().subscribe(
      (universidades) => (this.universidades = universidades)
    );
    this.PleduapiService.getPlanesEduLista().subscribe(
      (Planesedu) => (this.planes = Planesedu)
    );
    this.PerioapiService.getPeriodoLista().subscribe((Periodo) =>
    { console.log('Periodos', Periodo);
      (this.periodos = Periodo)
  });
    this.ModEscapiService.getModEscolar().subscribe((ModalidaEsc) => {
      console.log('Modalidades', ModalidaEsc);
      (this.modalidadesEsc = ModalidaEsc)
    });
  }

  cargarescolar() {

    this.actived.params.subscribe((params) => {
      let id = params['id_escolar'];
      if (id) {
        this.EscolarnapiService.getEscolarid(id).subscribe(
          (escolar) => (this.escolar = escolar)
          ,(error)=>console.error('Error al cagar los escolares',error)
        );
      }
    });
  }

  editarescolar() {
    this.EscolarnapiService.modificarEscolares(this.escolar).subscribe(
      (escolares) => {
        this.route.navigate(['/lista-escolares']);
        console.log(
          'Escoclares actualizados',
          'Escolar ${this.escolar.matricula} actualizados con exito'
        );
      },
      (error) => 'Errro al actualizar'
    );
  }
  guardar() {
    this.EscolarnapiService.guardarEscolares(this.escolar).subscribe(
      (escolares) => {
        this.PerioapiService.setPeriodoSeleccionado(this.escolar.periodo);
        this.route.navigate(['/lista-escolares']);
        console.log(
          'Nuevo datos escolares',
          `Nuevo ${this.escolar.matricula} actualizado con éxito`
        );
      },
      (error) => console.error('Error al actualizar', error)
    );
  }


}
