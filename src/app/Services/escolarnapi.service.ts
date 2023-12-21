import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Escolares} from "../Clases/escolares";

@Injectable({
  providedIn: 'root'
})
export class EscolarnapiService {

  constructor(private http:HttpClient) { }
  getEscolares(): Observable<Escolares[]> {
    return this.http.get<Escolares[]>(`${baseurl}/Escolares`);
  }

  guardarEscolares(Escolares: Escolares): Observable<Escolares> {
    return this.http.post<Escolares>(`${baseurl}/guardar`, Escolares);
  }

  modificarEscolares(id: number, editar: Escolares): Observable<Escolares> {
    return this.http.put<Escolares>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarEscolares(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
