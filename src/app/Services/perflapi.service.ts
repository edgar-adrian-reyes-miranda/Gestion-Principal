import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Perfilamiento} from "../Clases/perfilamiento";

@Injectable({
  providedIn: 'root'
})
export class PerflapiService {

  constructor(private http:HttpClient) { }
  getPerfilamiento() {
    return this.http.get<Perfilamiento[]>(`${baseurl}perfilamiento/lista`);
  }
  getPerfilamientoporid(id_perfilamiento:number) {
    return this.http.get<Perfilamiento>(`${baseurl}perfilamiento/${id_perfilamiento}`);
  }

  guardarPerfilamiento(Perfilamiento: Perfilamiento): Observable<Perfilamiento> {
    return this.http.post<Perfilamiento>(`${baseurl}perfilamiento/guardar`, Perfilamiento);
  }

  modificarPerfilamiento(Perfilamiento: Perfilamiento): Observable<Perfilamiento> {
    return this.http.put<Perfilamiento>(`${baseurl}perfilamiento/editar/${Perfilamiento.id_perfilamiento}`, Perfilamiento);
  }

  eliminarPerfilamiento(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}perfilamiento/${id}`);
  }
}
