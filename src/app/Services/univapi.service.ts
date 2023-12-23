import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Universidad} from "../Clases/universidad";

@Injectable({
  providedIn: 'root'
})
export class UnivapiService {

  constructor(private http:HttpClient) { }

  getUniversidades() {
    return this.http.get<Universidad[]>(`${baseurl}/universidades/lista`);
  }

}
