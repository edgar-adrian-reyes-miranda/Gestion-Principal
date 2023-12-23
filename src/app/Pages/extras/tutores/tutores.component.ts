import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tutores} from "../../../Clases/tutores";
import { TurtorapiService } from 'src/app/Services/turtorapi.service';

@Component({
  selector: 'app-tutores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutores.component.html',
  styleUrl: './tutores.component.css'
})
export class TutoresComponent implements  OnInit{
  tutores:Tutores[]=[];
  constructor(private tutorapi:TurtorapiService) {}
  ngOnInit(): void {
    this.tutorapi.getTutores().subscribe(
      (data:Tutores[])=>{
        this.tutores=data;
        console.log(this.tutores)
      },
      error=>'No se encontro ningun tutor');
  }

}
