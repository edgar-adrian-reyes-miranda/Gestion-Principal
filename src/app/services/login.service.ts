import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import baseUrl from './Serve';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  isLoggedIn: any;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8090/api/usuarios/login", user);
  }
  

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:8090/api/usuarios/guardar", user);
  }
  registropersonal(user:any):Observable<any>{
    return this.http.post('http://localhost:8090/api/datospersonales/guardardato',user);
  }

  registroEscolar(user:any):Observable<any>{
    return this.http.post('http://localhost:8090/api/escolares/guardarescolar',user);
  }
  setToken(token: string): void {
    this.cookies.set("token", token);
  }

  getToken(): string {
    return this.cookies.get("token");
  }

  getUser(): Observable<any> {
    return this.http.get("http://localhost:8090/api/usuarios/buscar");
  }
  getDatosPersonales():Observable<any> {
    return this.http.get("http://localhost:8090/api/datospersonales/listadatosper");
  }
  getDatosEscolares():Observable<any> {
    return this.http.get("http://localhost:8090/api/escolares/listaEscolares");
  }

  deleteUser(usuarioId:number): Observable<any> {
    return this.http.delete<void>(`http://localhost:8090/api/usuarios/${usuarioId}`);
  }
  deletePersonal(id:number): Observable<any> {
    return this.http.delete<void>(`http://localhost:8090/api/datospersonales/${id}`);
  }
  deleteEscolar(id:number): Observable<any> {
    return this.http.delete<void>(`http://localhost:8090/api/escolares/${id}`);
  }

  editUser(usuarioId: number, updatedUser: any): Observable<any> {
    return this.http.put<void>(`http://localhost:8090/api/usuarios/${usuarioId}`, updatedUser);
  }
  

  getUserLogged(): Observable<any> {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
    // Retornar una observable que represente la solicitud al backend
    return this.http.get(`http://localhost:8090/api/usuarios/${token}`);
  }
}
