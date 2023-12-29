import { Escolares } from './../Clases/escolares';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";

@Injectable({
  providedIn: 'root'
})
export class EscolarnapiService {

  constructor(private http:HttpClient) { }


  getEscolares() {
    return this.http.get<Escolares[]>(`${baseurl}escolares/lista`);
  }

  getEscolarid(id_escolar:number){
    return this.http.get<Escolares>(`${baseurl}escolares/${id_escolar}`);
  }

  guardarEscolares(Escolares: Escolares) {
    return this.http.post<Escolares>(`${baseurl}escolares/guardar`, Escolares);
  }

  modificarEscolares(Escolares: Escolares): Observable<Escolares> {
    return this.http.put<Escolares>(`${baseurl}escolares/editar/${Escolares.id_escolar}`,Escolares);
  }

  eliminarEscolares(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}escolares/${id}`);
  }
}
