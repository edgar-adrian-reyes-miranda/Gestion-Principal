import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Periodo } from '../Clases/periodo';
import baseurl from "./url";
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerioapiService {
  private periodoSeleccionado: Periodo | null = null;
  constructor(private http:HttpClient) { }
  getPeriodo() {
    return this.http.get<Periodo[]>(`${baseurl}periodo/lista`);
  }

  getPeriodoLista():Observable<Periodo[]>{
    return this.http.get(`${baseurl}periodo/lista`).pipe(
      map((periodos) => periodos as Periodo[])
    );
  }
  // En tu servicio de almacenamiento
  setPeriodoSeleccionado(periodo: Periodo) {
    this.periodoSeleccionado = periodo;
  }

  getPeriodoSeleccionado() {
    return this.periodoSeleccionado;
  }

}
