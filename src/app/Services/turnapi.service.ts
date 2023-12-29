import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turno } from '../Clases/turno';
import baseurl from './url';

@Injectable({
  providedIn: 'root'
})
export class TurnapiService {

  constructor(private http:HttpClient) { }

  getturnos(){
    return this.http.get<Turno[]>(`${baseurl}turno/lista`);
  }
}
