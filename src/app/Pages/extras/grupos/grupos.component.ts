import { GrupoapiService } from './../../../Services/grupoapi.service';
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Grupos} from "../../../Clases/grupos";

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export class GruposComponent implements OnInit{
grupos:Grupos[]=[];
constructor(private grupoapi:GrupoapiService){}

  ngOnInit(): void {
    this.grupoapi.getgrupos().subscribe(
      (data:Grupos[])=>{
        this.grupos=data;
        console.log(this.grupos);
     }, error =>'No se encontro la lista' );
  }

}
