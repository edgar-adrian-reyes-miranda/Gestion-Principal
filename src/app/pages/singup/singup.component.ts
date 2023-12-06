import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
 
})

export class SingupComponent  implements OnInit {

  correo!:string;
  nombre!:string;
  p_apellido!:string;
  password!:string;
  s_apellido!:string;
  username!:string;
 
 
  constructor(public userService: LoginService) {}
  ngOnInit(): void {
    
  }
 
  register() {
   const user = {correo :this.correo,nombre :this.nombre,p_apellido :this.p_apellido, password :this.password,s_apellido :this.s_apellido,username :this.username};
   this.userService.register(user).subscribe(data => {
     this.userService.setToken(data.token);
   });
 }
 
}
