import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
 
})

export class SingupComponent  implements OnInit {

 ngOnInit(): void {
 }

 correo!:string;
 nombre!:string;
 p_apellido!:string;
 password!:string;
 s_apellido!:string;
 username!:string;


 constructor(public userService: UsersService) {}

 register() {
  const user = {correo :this.correo,nombre :this.nombre,p_apellido :this.p_apellido, password :this.password,s_apellido :this.s_apellido,username :this.username};
  this.userService.register(user).subscribe(data => {
    this.userService.setToken(data.token);
  });
}


}
