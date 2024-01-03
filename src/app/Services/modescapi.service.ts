import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModEscolares } from '../Clases/ModEscolares';
import baseurl from './url';
import {map, Observable, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ModescapiService {

  constructor(private http:HttpClient) { }

 getModEscolar(){
    return this.http.get<ModEscolares[]>(`${baseurl}modEscolar/lista`).pipe(
      tap(response => console.log('Respuesta de API', response)),
      map(response => response as ModEscolares[])
    );
 }
 getModEscolarporId(id_modalidad:number){
    return this.http.get<ModEscolares>(`${baseurl}modEscolar/${id_modalidad}`);
 }

 getMoEscoalrMap():Observable<ModEscolares[]>{
    return this.http.get(`${baseurl}modEscolar/lista`).pipe(
      map(ModalidadEscolar=> ModalidadEscolar as ModEscolares[])
    );

 }
}
