import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Admin } from 'src/app/services/admin';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datosadministradores',
  standalone: true,
  imports: [CommonModule, MatIconModule,RouterLink],
  templateUrl: './datosadministradores.component.html',
  styleUrl: './datosadministradores.component.css'
})
export class DatosadministradoresComponent implements OnInit{
   admins:Admin[]=[];
  
   constructor(private adminService: LoginService){}

  ngOnInit(): void {
    this.loadAdmins();
  }
  loadAdmins(): void {
    this.adminService.getUser().subscribe((data: Admin[]) => {
      this.admins = data;
    });
  }

  deleteAdmin(id: number): void {
    this.adminService.deleteUser(id).subscribe(() => {
      this.loadAdmins();
    });
  }
  

}
