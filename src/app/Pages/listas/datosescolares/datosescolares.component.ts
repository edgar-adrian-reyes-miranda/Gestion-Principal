import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Escolares} from "../../../Clases/escolares";

@Component({
  selector: 'app-datosescolares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datosescolares.component.html',
  styleUrl: './datosescolares.component.css'
})
export class DatosescolaresComponent implements OnInit{
  datoesc:Escolares[]=[];
  ngOnInit(): void {
  }

}
