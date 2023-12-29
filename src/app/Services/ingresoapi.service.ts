import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;
import baseurl from "./url";
import { Ingresos } from "../Clases/ingresos";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoapiService {

  constructor(private http: HttpClient) { }

  getIngresos() {
    return this.http.get<Ingresos[]>(`${baseurl}ingresos/lista`);
  }

  guardarIngresos(Ingresos: Ingresos) {
    return this.http.post<Ingresos>(`${baseurl}ingresos/guardar`, Ingresos);
  }

  modificarIngresos(Ingresos: Ingresos): Observable<Ingresos> {
    return this.http.put<Ingresos>(`${baseurl}ingresos/editar/${Ingresos.id_ingreso}`, Ingresos);
  }

  eliminarIngresos(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}ingresos/${id}`);
  }
}
