import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Ftd} from "../Clases/ftd";

@Injectable({
  providedIn: 'root'
})
export class FtdapiService {

  constructor(private http:HttpClient) { }
  getFtd(): Observable<Ftd[]> {
    return this.http.get<Ftd[]>(`${baseurl}/Ftd`);
  }

  guardarFtd(Ftd: Ftd): Observable<Ftd> {
    return this.http.post<Ftd>(`${baseurl}/guardar`, Ftd);
  }

  modificarFtd(id: number, editar: Ftd): Observable<Ftd> {
    return this.http.put<Ftd>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarFtd(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
