import { SingupService } from './../../services/singup.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatSnackBar } from '@angular/material/snack-bar';


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


  constructor(private SingupService:SingupService, private snack:MatSnackBar ){}

  ngOnInit():void{

  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.SingupService.añadirUsuario(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.snack.open('Usuario guardado','Usuario registrado con exito en el sistema',{
          duration : 3000
        });
      },(error: any) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          duration : 3000
        });
      }
    )

}
}
