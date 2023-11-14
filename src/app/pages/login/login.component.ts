import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  loginData={
    "username":"",
    "password":""
  }
 

  constructor (private snack:MatSnackBar, private LoginService:LoginService){

  }
  ngOnInit():void{

  }
  formSubmit(){
    if(this.loginData.username.trim()=='' || this.loginData.username.trim()== null){
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar',{
        duration: 3000
      })
      return;
           }
           if(this.loginData.password.trim()== ''|| this.loginData.password.trim()==null){
            this.snack.open('La contraseña es requerdia: ', 'Aceptar',{
                  duration: 3000
            })
            return;
           }


}
}