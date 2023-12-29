import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horario } from '../Clases/horario';
import baseurl from './url';

@Injectable({
  providedIn: 'root'
})
export class HorapiService {

  constructor(private http:HttpClient) { }

  getHorario(){
    return this.http.get<Horario[]>(`${baseurl}horario/lista`);
  }
}
