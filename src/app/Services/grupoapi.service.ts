import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Grupos} from "../Clases/grupos";

@Injectable({
  providedIn: 'root'
})
export class GrupoapiService {

  constructor(private http:HttpClient) { }
  getgrupos() {
    return this.http.get<Grupos[]>(`${baseurl}grupos/lista`);
  }

  guardargrupos(grupos: Grupos): Observable<Grupos> {
    return this.http.post<Grupos>(`${baseurl}/guardar`, grupos);
  }

  modificargrupos(id: number, editar: Grupos): Observable<Grupos> {
    return this.http.put<Grupos>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminargrupos(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
