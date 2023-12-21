import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Personales} from "../../../Clases/personales";

@Component({
  selector: 'app-datospersonales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datospersonales.component.html',
  styleUrl: './datospersonales.component.css'
})
export class DatospersonalesComponent implements OnInit{
  personal:Personales[]=[];
  ngOnInit(): void {
  }


}
