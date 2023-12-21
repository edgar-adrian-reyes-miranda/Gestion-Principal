import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ingresos} from "../../../Clases/ingresos";

@Component({
  selector: 'app-datosingresos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datosingresos.component.html',
  styleUrl: './datosingresos.component.css'
})
export class DatosingresosComponent implements OnInit{
  ingresos:Ingresos[]=[];
  ngOnInit(): void {
  }

}
