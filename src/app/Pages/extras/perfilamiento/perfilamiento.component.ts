import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Perfilamiento} from "../../../Clases/perfilamiento";

@Component({
  selector: 'app-perfilamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfilamiento.component.html',
  styleUrl: './perfilamiento.component.css'
})
export class PerfilamientoComponent implements  OnInit{
  perfilamientos:Perfilamiento[]=[];
  ngOnInit(): void {
  }

}
