import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingresos } from '../../../Clases/ingresos';
import { IngresoapiService } from '../../../Services/ingresoapi.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datosingresos',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule,],
  templateUrl: './datosingresos.component.html',
  styleUrl: './datosingresos.component.css',
})
export class DatosingresosComponent implements OnInit {
  ingresos: Ingresos[] = [];

  constructor(
    private IngresoapiService: IngresoapiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.IngresoapiService.getIngresos().subscribe(
      (data: Ingresos[]) => {
        console.log('Datos de ingresos', data);
        this.ingresos = data;
      },
      (error) => console.error('Error al obtener los datos de ingresos', error),
      () => console.log('Obtencion de datos de ingreso completo')
    );
  }

  eliminarIngreso(id: number | undefined) {
    if (typeof id === 'number') {
      this.IngresoapiService.eliminarIngresos(id).subscribe(
        (res) => {
          console.log('Dato de ingreso eliminado con exito');
          this.actualizarListaIngreso();
        },
        (error) => console.error('Error al eliminar al dato personal', error)
      );
    } else {
      console.error('ID de ingreso no valido', id);
    }
  }
  private actualizarListaIngreso() {
    this.IngresoapiService.getIngresos().subscribe(
      (Data: Ingresos[]) => {
        console.log('Datos de ingreso actualizados', Data);
      },
      (error) => console.error('Error al obtener el dato de ingreso', error),
      () => console.error('Actualizacion de datos de ingreso completo')
    );
  }

  editarIngreso(id_ingreso: number | undefined) {
    if (id_ingreso !== undefined) {
      this.route.navigate(['/Login']);
    } else {
      console.error('ID de ingreso no valido', id_ingreso);
    }
  }
}
