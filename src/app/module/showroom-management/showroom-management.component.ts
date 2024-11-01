import { Component, OnInit } from '@angular/core';
import { ShowroomService } from '../../service/showroom.service';
import { CommonModule, Location } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowroomFormComponent } from '../showroom-form/showroom-form.component';

@Component({
  selector: 'app-showroom-management',
  templateUrl: './showroom-management.component.html',
  styleUrls: ['./showroom-management.component.css'],
  standalone: true,
  providers: [ShowroomService],
  imports: [CommonModule, RouterModule, FormsModule , ShowroomFormComponent]
})
export class ShowroomManagementComponent implements OnInit {
  showrooms: any[] = [];
  currentPage = 0;
  pageSize = 10;
  totalPages = 1;
  sortField = 'name';
  pageSizeOptions = [5, 10, 20];

  constructor(
    private showroomService: ShowroomService,
    private location: Location,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.loadShowrooms();
  }
  goBack(): void {
    this.location.back();
  }

  loadShowrooms(): void {
    this.showroomService.getShowrooms(this.currentPage, this.pageSize, this.sortField).subscribe(
      (data) => {
        this.showrooms = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = data.pageable.pageNumber;
      },
      (error) => console.error('Error fetching showrooms', error)
    );
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadShowrooms();
    }
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 0; // Reset to first page
    this.loadShowrooms();
  }

  onSortChange(field: string): void {
    this.sortField = field;
    this.loadShowrooms();
  }

  viewShowroom(id: string): void {
    // Navigate to the showroom coumbonenet
    this.router.navigate(['/showroom', id]);

  }

  editShowroom(id: string): void {

  }

  deleteShowroom(id: string): void {
    if (confirm('Are you sure you want to delete this showroom?')) {
      this.showroomService.deleteShowroom(id).subscribe(() => {
        this.loadShowrooms(); // Refresh the list after deletion
      });
    }
  }
}
