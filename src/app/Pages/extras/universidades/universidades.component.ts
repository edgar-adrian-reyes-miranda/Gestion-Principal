import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Universidad} from "../../../Clases/universidad";
import { UnivapiService } from 'src/app/Services/univapi.service';

@Component({
  selector: 'app-universidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './universidades.component.html',
  styleUrl: './universidades.component.css'
})
export class UniversidadesComponent implements OnInit{
  universidades:Universidad[]=[];

  constructor(private uniapi:UnivapiService){}
  
  ngOnInit(): void {
    this.uniapi.getUniversidades().subscribe(
      (data:Universidad[]) =>{
        this.universidades=data;
        console.log(this.universidades)
      },
      error => 'Nose encontro en la lista');
  }
}
