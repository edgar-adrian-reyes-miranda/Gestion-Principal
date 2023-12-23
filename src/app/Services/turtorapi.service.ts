import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import baseurl from "./url";
import {Tutores} from "../Clases/tutores";

@Injectable({
  providedIn: 'root'
})
export class TurtorapiService {

  constructor(private http:HttpClient) { }
  getTutores() {
    return this.http.get<Tutores[]>(`${baseurl}tutor/lista`);
  }

}
