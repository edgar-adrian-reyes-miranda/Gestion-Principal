import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Admins} from "../../Clases/admins";

@Component({
  selector: 'app-loginusuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loginusuario.component.html',
  styleUrl: './loginusuario.component.css'
})
export class LoginusuarioComponent implements OnInit{
  admin:Admins[]=[];
  ngOnInit(): void {
  }

}
