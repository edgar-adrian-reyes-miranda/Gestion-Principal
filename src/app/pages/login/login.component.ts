import { DashboardComponent } from './../admin/dashboard/dashboard.component';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;

  ngOnInit(): void {}

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user = {username: this.username, password: this.password};
    this.userService.login(user).subscribe(
      (data: any) => {
        // Si la respuesta es exitosa, verificar si hay un mensaje de error
        if (data && data.error) {
          console.log('Error en la respuesta del servidor:', data.error);
        } else {
          this.userService.setToken(data.token);
          this.router.navigateByUrl('/DashboardComponent');
        }
      },
      (error) => {
        console.log('Error en la solicitud POST:', error);
      }
    );
  } 
}