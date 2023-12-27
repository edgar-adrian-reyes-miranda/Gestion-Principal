import { Grupos } from './../Clases/grupos';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";


@Injectable({
  providedIn: 'root'
})
export class GrupoapiService {

  constructor(private http:HttpClient) { }
  getgrupos() {
    return this.http.get<Grupos[]>(`${baseurl}grupos/lista`);
  }

  getgruposporid(id_grupo:number) {
    return this.http.get<Grupos>(`${baseurl}grupos/${id_grupo}`);
  }

  guardargrupos(grupos: Grupos): Observable<Grupos> {
    return this.http.post<Grupos>(`${baseurl}grupos/guardar`, grupos);
  }

  modificargrupos(Grupos: Grupos): Observable<Grupos> {
    return this.http.put<Grupos>(`${baseurl}grupos/editar/${Grupos.id_grupo}`, Grupos);
  }

  eliminargrupos(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}grupos/${id}`);
  }
}
