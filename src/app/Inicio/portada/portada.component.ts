import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {MenuComponent} from "../../Pages/menu/menu.component";

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, BrowserModule, CommonModule, MenuComponent,],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent implements OnInit{

  isAdminVisible = true;

  toggleRole() {
    this.isAdminVisible = !this.isAdminVisible;
  }

  ngOnInit(): void {
  }
}
