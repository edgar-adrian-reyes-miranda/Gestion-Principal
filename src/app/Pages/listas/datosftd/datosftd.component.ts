import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ftd} from "../../../Clases/ftd";

@Component({
  selector: 'app-datosftd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datosftd.component.html',
  styleUrl: './datosftd.component.css'
})
export class DatosftdComponent implements  OnInit{
  ftd:Ftd[]=[];
  ngOnInit(): void {
  }

}
