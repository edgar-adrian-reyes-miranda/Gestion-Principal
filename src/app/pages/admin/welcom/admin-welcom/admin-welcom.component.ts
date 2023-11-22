import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-admin-welcom',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './admin-welcom.component.html',
  styleUrl: './admin-welcom.component.css'
})
export class AdminWelcomComponent implements OnInit{
usuario: any;
  constructor() { }

  ngOnInit(): void {

  }

}
