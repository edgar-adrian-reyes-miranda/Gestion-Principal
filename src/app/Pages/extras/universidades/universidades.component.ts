import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Universidad} from "../../../Clases/universidad";

@Component({
  selector: 'app-universidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './universidades.component.html',
  styleUrl: './universidades.component.css'
})
export class UniversidadesComponent implements OnInit{
  uni:Universidad[]=[];
  ngOnInit(): void {
  }

}
