import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Universidad} from "../Clases/universidad";

@Injectable({
  providedIn: 'root'
})
export class UnivapiService {

  constructor(private http:HttpClient) { }

  getUniversidades(): Observable<Universidad[]> {
    return this.http.get<Universidad[]>(`${baseurl}/universidades`);
  }

  guardarUniversidad(universidad: Universidad): Observable<Universidad> {
    return this.http.post<Universidad>(`${baseurl}/guardar`, universidad);
  }

  modificarUniversidad(id: number, editar: Universidad): Observable<Universidad> {
    return this.http.put<Universidad>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarUniversidad(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
