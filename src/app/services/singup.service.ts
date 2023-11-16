import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingupService {
  constructor(private httpClient: HttpClient) { }

  public añadirUsuario(user: any) {
    console.log('Enviando solicitud para añadir usuario:', user);
    return this.httpClient.post(`${baseUrl}/usuarios/`, user)
      .pipe(
        catchError((error: any) => {
          console.error('Error en la solicitud:', error);
          throw error;
        })
      );
  }
  
}
