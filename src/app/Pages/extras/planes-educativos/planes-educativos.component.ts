import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PleduapiService} from "../../../Services/pleduapi.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-planes-educativos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './planes-educativos.component.html',
  styleUrl: './planes-educativos.component.css'
})
export class PlanesEducativosComponent implements OnInit{
  planes:any[]=[];

  constructor(private pleduapi:PleduapiService) { }

  ngOnInit(): void {
  this.pleduapi.getPlanesedu().subscribe(
    (data:any)=>{
      this.planes=data;
      console.log(this.planes);
    },
    error => 'Error al mostrar la lista');
  }

}
