import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from "../pages/singup/singup.component";
import { LoginComponent } from "../pages/login/login.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';



@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, SingupComponent, LoginComponent, MatIconModule,MatInputModule]
})
export class NavbarComponent {

}
