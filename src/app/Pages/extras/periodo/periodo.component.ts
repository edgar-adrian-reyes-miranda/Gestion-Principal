import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerioapiService} from "../../../Services/perioapi.service";


@Component({
  selector: 'app-periodo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './periodo.component.html',
  styleUrl: './periodo.component.css'
})
export class PeriodoComponent implements  OnInit{

  periodo:any[]=[];
  constructor(private perioapi:PerioapiService) {  }

  ngOnInit(): void {
    this.perioapi.getPeriodo().subscribe(
      (data:any)=>{
        this.periodo=data;
        console.log(this.periodo)
      },
      error =>'No se encuentra la tabla periodo');
  }

}
