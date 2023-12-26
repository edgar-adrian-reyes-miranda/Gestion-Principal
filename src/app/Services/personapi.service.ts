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
  getperson(){
    return this.http.get<Personales[]>(`${baseurl}personales/lista`)
  }
  getPersonales(id:number): Observable<Personales[]> {
    return this.http.get<Personales[]>(`${baseurl}personales/${id}`);
  }

  guardarPersonales(Personales: Personales): Observable<Personales> {
    return this.http.post<Personales>(`${baseurl}personales/guardar`, Personales);
  }

  modificarPersonales(id: number, editar: Personales): Observable<Personales> {
    return this.http.put<Personales>(`${baseurl}personales/editar/${id}`, editar);
  }

  eliminarPersonales(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}personales/${id}`);
  }
}
