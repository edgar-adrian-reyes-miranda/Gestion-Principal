import { Universidad } from 'src/app/Clases/universidad';
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
  getUniversidadesporid(id_uni:number) {
    return this.http.get<Universidad>(`${baseurl}universidades/${id_uni}`);
  }
  guardarUni(Universidad :Universidad){
    return this.http.post<Universidad>(`${baseurl}universidades/guardar`,Universidad);
  }

  modificarUni(Universidad:Universidad): Observable<Universidad> {
    return this.http.put<Universidad>(`${baseurl}universidades/editar/${Universidad.id_uni}`, Universidad);
  }

  eliminarUniversidad(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}universidades/${id}`);
  }

}
