import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  loginData={
    "username":"",
    "password":""
  }

  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router){}

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim()== '' || this.loginData.username.trim()== null){
      this.snack.open('El nombre de usuario es requerido!!', 'Aceptar',{
        duration:3000
      })
      return;
    }
      this.loginService.generatetoken(this.loginData).subscribe(
        (data:any)=>{
          console.log(data);
          this.loginService.loginUser(data.token);
          this.loginService.getCurrentUser().subscribe((user:any) => {
            this.loginService.setUser(user);
            console.log(user);

            if(this.loginService.getUserRoler() == 'ADMIN'){
              //dashborad admin
              //windows.location.hrf='/admin';
              this.router.navigate(['admin']);
              this.loginService.loginStatusSubjec.next(true);
              }
              else if(this.loginService.getUserRoler()=='NORMAL'){
                //user dashboard
                //windows.location.hrf='/user-dashboard';
                this.router.navigate(['dashboard-user']);
                this.loginService.loginStatusSubjec.next(true);
              }
              else{
                  this.loginService.logout();
              }
            })
          },(error) => {
            console.log(error);
            this.snack.open('Detalles invalidos, vuelvea intentar!! ', 'Aceptar',{
              duration:3000
            })
        }
     )
    }
}