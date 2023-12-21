import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Ingresos} from "../Clases/ingresos";

@Injectable({
  providedIn: 'root'
})
export class IngresoapiService {

  constructor(private http:HttpClient) { }
  getIngresos(): Observable<Ingresos[]> {
    return this.http.get<Ingresos[]>(`${baseurl}/Ingresos`);
  }

  guardarIngresos(Ingresos: Ingresos): Observable<Ingresos> {
    return this.http.post<Ingresos>(`${baseurl}/guardar`, Ingresos);
  }

  modificarIngresos(id: number, editar: Ingresos): Observable<Ingresos> {
    return this.http.put<Ingresos>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarIngresos(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
