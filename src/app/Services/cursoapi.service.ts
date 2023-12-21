import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Cursos} from "../Clases/cursos";

@Injectable({
  providedIn: 'root'
})
export class CursoapiService {

  constructor(private http:HttpClient) { }
  getCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${baseurl}/Cursos`);
  }

  guardarCursos(Cursos: Cursos): Observable<Cursos> {
    return this.http.post<Cursos>(`${baseurl}/guardar`, Cursos);
  }

  modificarCursos(id: number, editar: Cursos): Observable<Cursos> {
    return this.http.put<Cursos>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarCursos(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
