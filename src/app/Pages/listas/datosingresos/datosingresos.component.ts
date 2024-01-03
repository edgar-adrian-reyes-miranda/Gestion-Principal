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
  ) { }

  ngOnInit(): void {
    this.IngresoapiService.getIngresos().subscribe(
      (data: Ingresos[]) => {
        console.log('Datos de ingresos', data);
        this.ingresos = data;
      },
      (error) => console.error('Error al obtener los datos de ingresos', error),
      () => console.log('Obtención de datos de ingreso completada')
    );
  }

  eliminarIngreso(id: number | undefined) {
    if (id) {
      this.IngresoapiService.eliminarIngresos(id).subscribe(
        (res) => {
          console.log('Dato de ingreso eliminado con éxito');
          this.actualizarListaIngreso();
        },
        (error) => console.error('Error al eliminar el dato de ingreso', error)
      );
    } else {
      console.error('ID de ingreso no válido', id);
    }
  }

  private actualizarListaIngreso() {
    this.IngresoapiService.getIngresos().subscribe(
      (data: Ingresos[]) => {
        console.log('Datos de ingreso actualizados', data);
        this.ingresos = data;
      },
      (error) => console.error('Error al obtener los datos de ingreso', error),
      () => console.log('Actualización de datos de ingreso completada')
    );
  }

  editarIngreso(id_ingreso: number | undefined) {
    if (id_ingreso) {
      this.route.navigate(['/Login']);
    } else {
      console.error('ID de ingreso no válido', id_ingreso);
    }
  }
}
