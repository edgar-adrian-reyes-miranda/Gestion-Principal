import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Modalidad} from "../../../Clases/modalidad";

@Component({
  selector: 'app-modalidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalidad.component.html',
  styleUrl: './modalidad.component.css'
})
export class ModalidadComponent implements  OnInit{
  modalidades:Modalidad[]=[];
  ngOnInit(): void {
  }

}
