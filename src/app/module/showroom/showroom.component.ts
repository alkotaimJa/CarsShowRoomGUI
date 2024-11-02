import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { ShowroomService } from '../../service/showroom.service';
import { UpdateShowroomFormComponent } from '../update-showroom-form/update-showroom-form.component';
import { CarManagmentComponent } from '../car-managment/car-managment.component';

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
  imports: [CommonModule, RouterModule, UpdateShowroomFormComponent, CarManagmentComponent] 
})
export class ShowroomComponent implements OnInit {
  showroom: any;
  showroomNumber: string | null = null;
  shoeroomId: string | null = null;


  constructor(
    private route: ActivatedRoute, 
    private showroomService: ShowroomService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.showroomNumber = this.route.snapshot.paramMap.get('id');
      if (this.showroomNumber) {
        this.loadShowroomDetails();
      }
    }
  
    loadShowroomDetails(): void {
      if (this.showroomNumber) {
        this.showroomService.viewShowroom(this.showroomNumber).subscribe(
          (data) => {
            this.showroom = data;
            this.shoeroomId = data.id;
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
      this.router.navigate(['/showRoom', this.showroomNumber]);
        }
    
    goToCarList(): void {
       if (this.shoeroomId) {
            this.router.navigate(['/cars', this.shoeroomId, this.showroomNumber]); 
          }
       }
  }


