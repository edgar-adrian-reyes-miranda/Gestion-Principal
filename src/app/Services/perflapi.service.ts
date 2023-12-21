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
  getPerfilamiento(): Observable<Perfilamiento[]> {
    return this.http.get<Perfilamiento[]>(`${baseurl}/Perfilamiento`);
  }

  guardarPerfilamiento(Perfilamiento: Perfilamiento): Observable<Perfilamiento> {
    return this.http.post<Perfilamiento>(`${baseurl}/guardar`, Perfilamiento);
  }

  modificarPerfilamiento(id: number, editar: Perfilamiento): Observable<Perfilamiento> {
    return this.http.put<Perfilamiento>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarPerfilamiento(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
