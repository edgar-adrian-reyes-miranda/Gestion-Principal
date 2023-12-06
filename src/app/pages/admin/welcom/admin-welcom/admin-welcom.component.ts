import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from "../../dashboard/dashboard.component";

@Component({
    selector: 'app-admin-welcom',
    templateUrl: './admin-welcom.component.html',
    styleUrls: ['./admin-welcom.component.css'],
    standalone: true,
    imports: [CommonModule, MatCardModule, MatDividerModule, MatIconModule, RouterLink, DashboardComponent]
})
export class AdminWelcomComponent implements OnInit {
 constructor(){}
 ngOnInit(): void {
     
 }

}
