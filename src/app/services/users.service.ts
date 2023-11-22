import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8090/api/usuarios/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:8090/api/usuarios/guardar", user);
  }

  setToken(token: string): void {
    this.cookies.set("token", token);
  }

  getToken(): string {
    return this.cookies.get("token");
  }

  getUser(): Observable<any> {
    return this.http.get("http://localhost:8090/api/usuarios");
  }

  getUserLogged(): Observable<any> {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
    // Retornar una observable que represente la solicitud al backend
    return this.http.get(`http://localhost:8090/api/usuarios/${token}`);
  }
}
