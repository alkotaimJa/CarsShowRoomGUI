import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HomeComponent } from './module/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],

  })    
export class AppComponent { }

