import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarService } from '../../service/car.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CarFormComponent } from '../car-form/car-form.component';

@Component({
  selector: 'app-car-managment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarFormComponent
  ],
  providers: [CarFormComponent],
  templateUrl: './car-managment.component.html',
  styleUrl: './car-managment.component.css'
})
export class CarManagmentComponent {

  cars: any[] = [];
  currentPage: number = 0;
  pageSize: number = 20;
  totalPages: number = 1;
  sortField: string = 'maker';
  sortOrder: string = 'asc';
  pageSizeOptions: number[] = [5, 10, 20];

  showroomId: string = "";

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location,

  ) {}

  ngOnInit(): void {
    this.showroomId = this.route.snapshot.paramMap.get('showroomId') || '';
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getCars(this.showroomId, this.currentPage, this.pageSize, this.sortField, this.sortOrder).subscribe(
      (response) => {
        this.cars = response.content;
        this.totalPages = response.totalPages;
      },
      (error) => {
        console.error('Error loading cars', error);
      }
    );
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadCars();
    }
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 0; 
    this.loadCars();
  }

  onSortChange(newSortField: string): void {
    this.sortField = newSortField;
    this.loadCars();
  }

  goBack(): void {
    this.location.back();

  }
  onSortOrderChange(arg0: string) {
    this.sortOrder = this.sortOrder 
    this.loadCars();

}
}
