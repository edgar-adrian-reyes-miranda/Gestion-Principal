import { GrupoapiService } from './../../Services/grupoapi.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Grupos } from './../../Clases/grupos';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-grupo',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule,],
  templateUrl: './nuevo-grupo.component.html',
  styleUrl: './nuevo-grupo.component.css'
})
export class NuevoGrupoComponent implements OnInit {
  Grupos: Grupos= new Grupos();

  constructor(private GrupoapiService:GrupoapiService, private router:Router, private activatedRouter:ActivatedRoute){}
  ngOnInit(): void {
  this.cargargrupos();
  }

  cargargrupos():void{
    this.activatedRouter.params.subscribe(params=>
      {
        let id = params ['id_grupo']
        if(id){
          this.GrupoapiService.getgruposporid(id).subscribe((Grupo)=> this.Grupos=Grupo)
        }
      });
  }

  guardar():void{
    this.GrupoapiService.guardargrupos(this.Grupos).subscribe(Grupo=> {
      this.router.navigate(['/Grupos'])
      console.log('Nuevo grupo', 'Nuevo ${this.Grupos.nombre} creado con exito')
    });
  }

  editarGrupo():void{
    this.GrupoapiService.modificargrupos(this.Grupos).subscribe(grupo=>{
      this.router.navigate(['/Grupos'])
      console.log('Grupo Actualizado',' Grupo ${this.Grupos.nombre} actualizado con exito')
      });
  }
}
