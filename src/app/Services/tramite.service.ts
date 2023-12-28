import { Tramite } from './../Clases/tramite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './url';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {
  
  constructor(private http:HttpClient) { }

  listatramite(){
    return this.http.get<Tramite[]>(`${baseurl}tramite/lista`);
  }
  gettramiteporid(id_tramite:number){
    return this.http.get<Tramite>(`${baseurl}tramite/${id_tramite}`);
  }

  modificarTramite(Tramite:Tramite): Observable<Tramite> {
    return this.http.put<Tramite>(`${baseurl}tramite/editar/${Tramite.id_tramite}`, Tramite);
  }

  eliminarTramite(id: number): Observable<void> {
    return this.http.delete<void>(`${baseurl}tramite/${id}`);
  }
}
