
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,  MatCardModule, MatDividerModule, MatIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor() {}
  ngOnInit() {
    
  }
 

}
