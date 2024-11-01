import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // Use standalone component syntax
  templateUrl: './home.component.html',
  imports: [CommonModule, HttpClientModule, RouterModule], // Add HttpClientModule here
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
