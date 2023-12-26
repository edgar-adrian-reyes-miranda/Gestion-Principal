import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-universidad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './universidad.component.html',
  styleUrl: './universidad.component.css'
})
export class UniversidadComponent {

  @Output() guardar = new EventEmitter<{ nombre: string, apellido: string }>();
  nombre: string = '';
  apellido: string = '';

  guardarDatos() {
    this.guardar.emit({ nombre: this.nombre, apellido: this.apellido });
  }
}
