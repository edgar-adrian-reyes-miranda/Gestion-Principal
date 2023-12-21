import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Personales} from "../Clases/personales";

@Injectable({
  providedIn: 'root'
})
export class PersonapiService {

  constructor(private http:HttpClient) { }
  getPersonales(): Observable<Personales[]> {
    return this.http.get<Personales[]>(`${baseurl}/Personales`);
  }

  guardarPersonales(Personales: Personales): Observable<Personales> {
    return this.http.post<Personales>(`${baseurl}/guardar`, Personales);
  }

  modificarPersonales(id: number, editar: Personales): Observable<Personales> {
    return this.http.put<Personales>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarPersonales(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
