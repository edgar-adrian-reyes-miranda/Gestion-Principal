import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tutores} from "../../../Clases/tutores";

@Component({
  selector: 'app-tutores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutores.component.html',
  styleUrl: './tutores.component.css'
})
export class TutoresComponent implements  OnInit{
  tutor:Tutores[]=[];
  ngOnInit(): void {
  }

}
