import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Usuario} from "../../Clases/usuario";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{
  usuario:Usuario[]=[];
  ngOnInit(): void {
  }

}
