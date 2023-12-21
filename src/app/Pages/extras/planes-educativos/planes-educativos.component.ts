import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Planesedu} from "../../../Clases/planesedu";

@Component({
  selector: 'app-planes-educativos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes-educativos.component.html',
  styleUrl: './planes-educativos.component.css'
})
export class PlanesEducativosComponent implements OnInit{
  planes:Planesedu[]=[];
  ngOnInit(): void {
  }

}
