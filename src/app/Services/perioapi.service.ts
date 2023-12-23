import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Periodo} from "../Clases/periodo";
import baseurl from "./url";

@Injectable({
  providedIn: 'root'
})
export class PerioapiService {

  constructor(private http:HttpClient) { }
  public getPeriodo() {
    return this.http.get<Periodo[]>(`${baseurl}periodo/lista`);
  }
}
