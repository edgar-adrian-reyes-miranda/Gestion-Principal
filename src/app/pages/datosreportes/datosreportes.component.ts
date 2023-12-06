import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-datosreportes',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './datosreportes.component.html',
  styleUrl: './datosreportes.component.css'
})
export class DatosreportesComponent {

}
