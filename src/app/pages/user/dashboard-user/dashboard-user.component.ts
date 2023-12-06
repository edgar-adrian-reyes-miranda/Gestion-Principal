import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

}
