import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Tutores} from "../Clases/tutores";

@Injectable({
  providedIn: 'root'
})
export class TurtorapiService {

  constructor(private http:HttpClient) { }
  getTutores(): Observable<Tutores[]> {
    return this.http.get<Tutores[]>(`${baseurl}/tutores`);
  }

  guardarTutores(Tutores: Tutores): Observable<Tutores> {
    return this.http.post<Tutores>(`${baseurl}/guardar`, Tutores);
  }

  modificarTutores(id: number, editar: Tutores): Observable<Tutores> {
    return this.http.put<Tutores>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarTutores(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
