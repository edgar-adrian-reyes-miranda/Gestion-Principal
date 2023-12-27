import { GrupoapiService } from './../../../Services/grupoapi.service';
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Grupos} from "../../../Clases/grupos";
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, ],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export class GruposComponent implements OnInit{

grupos:Grupos[]=[];
constructor(private grupoapi:GrupoapiService, private router:Router){}

  ngOnInit(): void {
    this.grupoapi.getgrupos().subscribe(
      (data:Grupos[])=>{
        this.grupos=data;
        console.log(this.grupos);
     }, error =>'No se encontro la lista' );
  }
  
  eliminargrupo(id: number|undefined) {
    if(typeof id === 'number'){
      this.grupoapi.eliminargrupos(id).subscribe(
        res=>{
          console.log('Grupo eliminado exitosamente');
          this.actualizarlistadegrupos();
        },
        error => console.error('Error al eliminar grupo',  error.error)
        );
      }else{
        console.error('ID de grupo no valido', id);
      }
    }

    private actualizarlistadegrupos(){
      this.grupoapi.getgrupos().subscribe(
        (data:Grupos[])=>{
          console.log('Datos de grupos actualizados', data);
          this.grupos= data;
        },
        error => console.error('Error al obtener grupos', error),
        () => console.log('Actuliazacion de grupos completa')
        );
    }

    editarGrupos(id_grupo:number | undefined){
      if(id_grupo !== undefined){
        this.router.navigate(['/Nuevo-grupo/forms/', id_grupo]);
      }else{
        console.error('ID de grupo no valido', id_grupo);
      }
    }
    }
