import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Include RouterModule
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent { }

