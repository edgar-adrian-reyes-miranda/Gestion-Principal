import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import baseurl from "./url";
import {Planesedu} from "../Clases/planesedu";

@Injectable({
  providedIn: 'root'
})
export class PleduapiService {

  constructor(private http:HttpClient) { }
  getPlanesedu() {
    return this.http.get<Planesedu[]>(`${baseurl}planes/lista`);
  }

  getPlanesEduLista():Observable<Planesedu[]>{
    return this.http.get(`${baseurl}planes/lista`).pipe(
      map(Planesedu=> Planesedu as Planesedu[])
    );
  }

}
