import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from "../pages/singup/singup.component";
import { LoginComponent } from "../pages/login/login.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, SingupComponent, LoginComponent]
})
export class NavbarComponent {

}
