import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { ShowroomService } from '../../service/showroom.service';
import { UpdateShowroomFormComponent } from '../update-showroom-form/update-showroom-form.component';

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
  imports: [CommonModule, RouterModule, UpdateShowroomFormComponent] 
})
export class ShowroomComponent implements OnInit {
  showroom: any;
  showroomId: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private showroomService: ShowroomService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.showroomId = this.route.snapshot.paramMap.get('id');
      if (this.showroomId) {
        this.loadShowroomDetails();
      }
    }
  
    loadShowroomDetails(): void {
      if (this.showroomId) {
        this.showroomService.viewShowroom(this.showroomId).subscribe(
          (data) => {
            this.showroom = data;
          },
          (error) => {
            console.error('Error loading showroom details', error);
          }
        );
      }
    }

    goBack(): void {
      this.router.navigate(['/showroom-management']);
    }

    onFormSubmitted(): void {
      // this.router.navigate(['/showRoom', ]);
        }
  }


