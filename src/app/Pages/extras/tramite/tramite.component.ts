import { TramiteService } from './../../../Services/tramite.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { Tramite } from 'src/app/Clases/tramite';

@Component({
  selector: 'app-tramite',
  standalone: true,
  imports: [CommonModule, RouterLink,  ],
  templateUrl: './tramite.component.html',
  styleUrl: './tramite.component.css'
})
export class TramiteComponent implements OnInit{
Tramites: Tramite[]=[];

constructor(private TramiteService:TramiteService){}
  ngOnInit(): void {
    this.TramiteService.listatramite().subscribe(
      (data:Tramite[])=>{
        this.Tramites=data;
        console.log(this.Tramites)
      },
      error=>'No se encontro la lista de tramites');
  }

}
