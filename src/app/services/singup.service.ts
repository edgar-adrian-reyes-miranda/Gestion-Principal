import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SingupService {
  constructor(private httpClient: HttpClient) { }
    public añadirUsuario(user:any){
      return this.httpClient.post(`${baseUrl}/usuarios/`, user)
    }
}
