import { AdminWelcomComponent } from './../admin/welcom/admin-welcom/admin-welcom.component';
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
  username: string = '';
password: string = '';
errorMessage: string = '';

constructor(private userService: UsersService, private router: Router) { }

ngOnInit(): void { }

  login() {
    const user = { username: this.username, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/AdminWelcomComponent');
      },
      error => {
        console.log(error);
      });
  }
}
