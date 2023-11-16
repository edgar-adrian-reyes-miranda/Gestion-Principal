import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec= new Subject<boolean>();

  constructor (private http:HttpClient){}

  ///generramos el token
  public generatetoken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
    }
    public getCurrentUser(){
      return this.http.get(`${baseUrl}/actual-usuario`);
    }
  //iniciamos sesion y establecemos el token en el localstorage
  public loginUser(token:any){
    localStorage.setItem('token',token);
  }

  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr==''|| tokenStr==null){
      return false
    }else{
      return true;
    }
  }

  //cerramos sesion y eliminamos el token del  localstorage
  public logout(){
 localStorage.removeItem('token');
 localStorage.removeItem('user');
    return true;
  }
  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }


  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
  public getUserRoler(){
    let user = this.getUser();
    console.log('Usuario:', user);
  
    if (user && user.authorities && user.authorities.length > 0) {
      console.log('Rol:', user.authorities[0].authority);
      return user.authorities[0].authority;
    } else {
      console.error('El usuario o sus autoridades son undefined.');
      return null; // o un valor por defecto según tu lógica
    }
  }
  
  }
