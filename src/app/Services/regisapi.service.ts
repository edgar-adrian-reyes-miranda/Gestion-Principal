import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Usuario} from "../Clases/usuario";

@Injectable({
  providedIn: 'root'
})
export class RegisapiService {

  constructor(private http:HttpClient) { }
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseurl}/Usuario`);
  }

  guardarUsuario(Usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${baseurl}/guardar`, Usuario);
  }

  modificarUsuario(id: number, editar: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${baseurl}/modificar/${id}`, editar);
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}/${id}`);
  }
}
