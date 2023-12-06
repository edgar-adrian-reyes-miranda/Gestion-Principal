import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Serve';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public añadirUsuario(user:any){
    return this.httpClient.post(`${baseUrl}registro`, user);
  }

  public añadirPersona(user:any){
    return this.httpClient.post(`${baseUrl}personas`, user);
  }
}
