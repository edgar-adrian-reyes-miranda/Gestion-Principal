import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Modalidad} from "../../../Clases/modalidad";
import {ModapiService} from "../../../Services/modapi.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-modalidad',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './modalidad.component.html',
  styleUrl: './modalidad.component.css'
})
export class ModalidadComponent implements  OnInit{
  modalidades: any=[];
  constructor(private modapiService: ModapiService) { }
  ngOnInit(): void {
    this.modapiService.getModalidades().subscribe(
      (data:any)=>{
        this.modalidades=data;
        console.log(this.modalidades);
      },
      error => 'no se encontro ninguna lista');
  }

}
