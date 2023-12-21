import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Planesedu} from "../Clases/planesedu";

@Injectable({
  providedIn: 'root'
})
export class PleduapiService {

  constructor(private http:HttpClient) { }
  getPlanesedu(): Observable<Planesedu[]> {
    return this.http.get<Planesedu[]>(`${baseurl}/Planesedu`);
  }

  guardarPlanesedu(Planesedu: Planesedu): Observable<Planesedu> {
    return this.http.post<Planesedu>(`${baseurl}/guardar`, Planesedu);
  }

  modificarPlanesedu(id: number, editar: Planesedu): Observable<Planesedu> {
    return this.http.put<Planesedu>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarPlanesedu(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
