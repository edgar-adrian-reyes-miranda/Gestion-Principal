import { PerflapiService } from './../../../Services/perflapi.service';
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
  perfilamiento:Perfilamiento[]=[];
  constructor(private Perflapi:PerflapiService){}
  ngOnInit(): void {
    this.Perflapi.getPerfilamiento().subscribe(
      (data:Perfilamiento[])=>{
        this.perfilamiento=data;
        console.log(this.perfilamiento)
      }, 
      error =>'No se encontro ninguna lista');
  }

}
