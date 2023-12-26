import { Universidad } from './../Clases/universidad';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";

@Injectable({
  providedIn: 'root'
})
export class UnivapiService {

  constructor(private http:HttpClient) { }

  getUniversidades() {
    return this.http.get<Universidad[]>(`${baseurl}universidades/lista`);
  }

  guardarUni(Universidad :Universidad){
    return this.http.post<Universidad>(`${baseurl}personales/guardar`,Universidad);
  }

  modificarUni(id: number, editar: Universidad): Observable<Universidad> {
    return this.http.put<Universidad>(`${baseurl}universidades/editar/${id}`, editar);
  }

  eliminarUniversidad(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}universidades/${id}`);
  }

}
