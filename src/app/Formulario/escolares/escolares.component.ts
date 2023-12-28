import { UnivapiService } from 'src/app/Services/univapi.service';
import { EscolarnapiService } from './../../Services/escolarnapi.service';
import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import { Universidad } from 'src/app/Clases/universidad';

@Component({
  selector: 'app-escolares',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './escolares.component.html',
  styleUrl: './escolares.component.css'
})
export class EscolaresComponent implements OnInit {
 universidad:Universidad[]=[];
 

 constructor(private EscolarnapiService:EscolarnapiService, private UnivapiService:UnivapiService){}

ngOnInit(): void {
 this.UnivapiService.getUniversidades().subscribe(universidad=> this.universidad= universidad);
}


}
