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
  getIngresosporid(id_ingreso:number) {
    return this.http.get<Ingresos>(`${baseurl}ingresos/${id_ingreso}`);
  }

  guardarIngresos(ingresos: Ingresos) {
    return this.http.post(`${baseurl}ingresos/guardar`,ingresos);
  }

  modificarIngresos(Ingresos: Ingresos): Observable<Ingresos> {
    return this.http.put<Ingresos>(`${baseurl}ingresos/editar/${Ingresos.id_ingreso}`, Ingresos);
  }

  eliminarIngresos(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}ingresos/${id}`);
  }
}
