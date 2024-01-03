import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {Tramite} from "../../Clases/tramite";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TramiteService} from "../../Services/tramite.service";

@Component({
  selector: 'app-nuevo-tramite',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule,  ],
  templateUrl: './nuevo-tramite.component.html',
  styleUrl: './nuevo-tramite.component.css'
})
export class NuevoTramiteComponent implements OnInit{

  tramite:Tramite = new Tramite();

  constructor(private tramiteaip:TramiteService, private route:Router, private activeRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.cargarTramite();
  }


  editartramite():void {
  this.tramiteaip.modificarTramite(this.tramite).subscribe(
    tramite=>{
      this.route.navigate(['/Tramite'])
      console.log('Tramite Actualizado','Tramite ${this.tramite.tipo_tramite} Actualizado con exito')
    },
    error => 'Error en actualziar');
  }

  guardar() :void{
  this.tramiteaip.guardarTramite(this.tramite).subscribe(tramite=> {
    this.route.navigate(['/Tramite'])
    console.log('Nuevo Tramite', 'Nuevo ${this.tramite.tipo_tramite} crado con exito')
  });
  }

   cargarTramite():void {
    this.activeRoute.params.subscribe(params=>
    {
      let id = params['id_tramite']
      if (id){
        this.tramiteaip.gettramiteporid(id).subscribe((Tramite)=>this.tramite=Tramite)
      }
    })
  }
}
