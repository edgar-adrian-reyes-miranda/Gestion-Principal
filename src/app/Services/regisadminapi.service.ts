import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Admins} from "../Clases/admins";

@Injectable({
  providedIn: 'root'
})
export class RegisadminapiService {

  constructor(private http:HttpClient) { }
  getAdmins(): Observable<Admins[]> {
    return this.http.get<Admins[]>(`${baseurl}/Admins`);
  }

  guardarAdmins(Admins: Admins): Observable<Admins> {
    return this.http.post<Admins>(`${baseurl}/guardar`, Admins);
  }

  modificarAdmins(id: number, editar: Admins): Observable<Admins> {
    return this.http.put<Admins>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarAdmins(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
