import { Component, OnInit} from '@angular/core';
  import { ShowroomService } from '../../service/showroom.service';
  import { Location } from '@angular/common';

@Component({
  selector: 'app-showroom-management',
  templateUrl: './showroom-management.component.html',
  styleUrl: './showroom-management.component.css'
})
export class ShowroomManagementComponent {
    showrooms: any[] = [];
  
    constructor(private showroomService: ShowroomService, private location: Location) {}

    goBack(): void {
      this.location.back();
    }
    ngOnInit(): void {
      this.showroomService.getShowrooms().subscribe(
        (data) => {
          console.log(data);
          this.showrooms = data;
        },
        (error) => {
          console.error('Error fetching showrooms', error);
        }
      );
    }
  }
  