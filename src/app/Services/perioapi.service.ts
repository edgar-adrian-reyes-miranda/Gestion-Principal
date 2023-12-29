import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Periodo} from "../Clases/periodo";
import baseurl from "./url";
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerioapiService {

  constructor(private http:HttpClient) { }
  getPeriodo() {
    return this.http.get<Periodo[]>(`${baseurl}periodo/lista`);
  }

  getPeriodoLista():Observable<Periodo[]>{
    return this.http.get(`${baseurl}periodo/lista`).pipe(
      map(Periodo=> Periodo as Periodo[])
    )
  }

}
