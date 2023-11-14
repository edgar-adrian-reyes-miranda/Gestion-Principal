import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatusSubjec: any;
  getUserRole() {
    throw new Error('Method not implemented.');
  }
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }
  setUser(user: any) {
    throw new Error('Method not implemented.');
  }
  loginUser(token: any) {
    throw new Error('Method not implemented.');
  }
  añadirUsuario(user: { username: string; nombre: string; password: string; primer_apellido: string; segundo_apellido: string; email: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){

  }

  public generatetoken(loginData:any){
    return this.http.post('${baseUrl}/generate-token', loginData);
  }


}
