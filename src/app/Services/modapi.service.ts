import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Modalidad} from "../Clases/modalidad";

@Injectable({
  providedIn: 'root'
})
export class ModapiService {

  constructor(private http:HttpClient) { }
 public getModalidades() {
    return this.http.get<Modalidad[]>(`${baseurl}modalidad/lista`);
  }
}
