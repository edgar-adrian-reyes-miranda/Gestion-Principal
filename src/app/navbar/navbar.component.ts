import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from "../pages/singup/singup.component";
import { LoginComponent } from "../pages/login/login.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HomeComponent } from "../pages/home/home.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, SingupComponent, LoginComponent, MatIconModule, MatInputModule, HomeComponent,MatToolbarModule, RouterLink,]
})
export class NavbarComponent {

   

}