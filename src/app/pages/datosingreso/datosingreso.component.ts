import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-datosingreso',
  standalone: true,
  imports: [CommonModule,RouterLink, MatIconModule],
  templateUrl: './datosingreso.component.html',
  styleUrl: './datosingreso.component.css'
})
export class DatosingresoComponent {

}
