import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseurl from "./url";
import {Genero} from "../Clases/genero";

@Injectable({
  providedIn: 'root'
})
export class GeneapiService {

  constructor(private http:HttpClient) { }

  getGenero(){
    return this.http.get<Genero[]>(`${baseurl}genero/lista`);
  }
  getGenerPORid(id_genero:number){
    return this.http.get<Genero>(`${baseurl}genero/${id_genero}`);
  }
}
