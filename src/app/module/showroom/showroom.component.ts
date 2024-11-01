import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ShowroomService } from '../../service/showroom.service';

interface Showroom {
  id: number;
  name: string;
  location: string;
  contact: string;
}

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] 
})
export class ShowroomComponent implements OnInit {
  showroom: any;

  constructor(
    private route: ActivatedRoute, 
    private showroomService: ShowroomService) { }

  ngOnInit(): void {
    const showroomId = this.route.snapshot.paramMap.get('id');
    if (showroomId) {
      this.loadShowroomDetails(showroomId);
    }
  }

  loadShowroomDetails(id: string): void {
    this.showroomService.viewShowroom(id).subscribe(
      (data) => {
        this.showroom = data; 
      },
      (error) => {
        console.error('Error fetching showroom details', error);
      }
    );
  }

}
