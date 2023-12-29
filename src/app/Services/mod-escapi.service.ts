import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalidadEscolar } from '../Clases/modalidad-escolar';
import baseurl from './url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModEscapiService {

  constructor(private http:HttpClient) { }

  getModEscolarLista(){
    return this.http.get<ModalidadEscolar[]>(`${baseurl}modEscolar/lista`);
  }
  
  getModEscolar():Observable<ModalidadEscolar[]> {
    return this.http.get(`${baseurl}modEscolar/lista`).pipe(
       map(ModalidadEscolar=> ModalidadEscolar as ModalidadEscolar[])
    );
  }
}
