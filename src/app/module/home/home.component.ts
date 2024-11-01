import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // Use standalone component syntax
  templateUrl: './home.component.html',
  imports: [RouterModule], // Include RouterModule
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
