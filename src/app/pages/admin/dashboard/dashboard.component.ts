
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {  MatSidenavModule} from '@angular/material/sidenav';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,  MatSidenavModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(public userService: UsersService) {}
  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService['getUser']().subscribe((user: any) => {
      console.log(user);
    });
  }

}
