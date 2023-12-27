import { Universidad } from './../../../Clases/universidad';
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnivapiService } from 'src/app/Services/univapi.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-universidades',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,ReactiveFormsModule,],
  templateUrl: './universidades.component.html',
  styleUrl: './universidades.component.css'
})
export class UniversidadesComponent implements OnInit{
  Universidad: Universidad[] = [];

  constructor(private uniapi: UnivapiService, private router: Router) {}

  ngOnInit(): void {
    this.uniapi.getUniversidades().subscribe(
      (data: Universidad[]) => {
        console.log('Datos de universidades:', data);
        this.Universidad = data;
      },
      error => console.error('Error al obtener universidades:', error),
      () => console.log('Obtención de universidades completada')
    );
  }

  eliminarUniversidad(id: number | undefined) {
    // Verificar si id es un número antes de realizar la operación
    if (typeof id === 'number') {
      this.uniapi.eliminarUniversidad(id).subscribe(
        res => {
          console.log('Universidad eliminada exitosamente.');
          // Actualizar la lista de universidades después de eliminar
          this.actualizarListaUniversidades();
        },
        error => console.error('Error al eliminar la universidad:', error.error)
      );
    } else {
      console.error('ID de universidad no válido:', id);
    }
  }

  private actualizarListaUniversidades() {
    this.uniapi.getUniversidades().subscribe(
      (data: Universidad[]) => {
        console.log('Datos de universidades actualizados:', data);
        this.Universidad = data;
      },
      error => console.error('Error al obtener universidades:', error),
      () => console.log('Actualización de universidades completada')
    );
  }
  
  // En tu componente TypeScript
editarUniversidad(id_uni: number | undefined) {
  // Verificar si id_uni tiene un valor antes de navegar
  if (id_uni !== undefined) {
    this.router.navigate(['/Nueva-Universidad/forms/', id_uni]);
  } else {
    console.error('ID de universidad no válido:', id_uni);
  }
}
}
