import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
 
})

export class SingupComponent  implements OnInit{


  public user ={
    username:'',
    nombre:'',
    password:'',
    primer_apellido:'',
    segundo_apellido: '',
    email:''
  }

  constructor(private LoginService:LoginService, private snack:MatSnackBar ){}

  ngOnInit():void{

  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      this.snack.open('el nombre de usuario es requerido', 'Aceptar',{
        duration :3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }
    this.LoginService.añadirUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Usuario Guardado', 'Usuario registrado con exito en el sistema','success');
      },(error )=>{
        console.log(error);
        this.snack.open('el nombre de usuario es requerido', 'Aceptar',{
          duration :3000
        });
      }
    )
  }

}
