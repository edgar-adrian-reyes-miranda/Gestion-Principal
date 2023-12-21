import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Modalidad} from "../Clases/modalidad";

@Injectable({
  providedIn: 'root'
})
export class ModapiService {

  constructor(private http:HttpClient) { }
  getModalidad(): Observable<Modalidad[]> {
    return this.http.get<Modalidad[]>(`${baseurl}/Modalidad`);
  }

  guardarModalidad(Modalidad: Modalidad): Observable<Modalidad> {
    return this.http.post<Modalidad>(`${baseurl}/guardar`, Modalidad);
  }

  modificarModalidad(id: number, editar: Modalidad): Observable<Modalidad> {
    return this.http.put<Modalidad>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarModalidad(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
