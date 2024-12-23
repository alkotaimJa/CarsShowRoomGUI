import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../../service/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent implements OnInit {
    carForm: FormGroup;
    submissionError: string | null = null;
  
    constructor(
       private fb: FormBuilder,
       private route: ActivatedRoute,
       private carService: CarService) {
      
      this.carForm = this.fb.group({
        vin: ['', [Validators.required, Validators.maxLength(25)]],
        maker: ['', [Validators.required, Validators.maxLength(25)]],
        model: ['', [Validators.required, Validators.maxLength(25)]],
        model_year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
        price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        carShowroom: this.fb.group({
          commercial_registration_number: ['', Validators.required]
        })
      });
    }
  
  get vin() { return this.carForm.get('vin'); }
  get maker() { return this.carForm.get('maker'); }
  get model() { return this.carForm.get('model'); }
  get model_year() { return this.carForm.get('model_year'); }
  get price() { return this.carForm.get('price'); }
  get commercial_registration_number() {
    return this.carForm.get('carShowroom.commercial_registration_number');
  }

  ngOnInit(): void {
     if (this.route.snapshot.paramMap.get('showroomNumber')) {
        this.carForm.get('carShowroom.commercial_registration_number')!.patchValue(this.route.snapshot.paramMap.get('showroomNumber'));
       }
  }

  onSubmit() {
    if (this.carForm.invalid) {
      this.submissionError = 'Please fill out the form correctly.';
      return;
    }

    this.submissionError = null;

    this.carService.addCar(this.carForm.value).subscribe({
      next: () => {
        alert('Car added successfully!');
        this.carForm.reset();
        window.location.reload();
      },
      error: (err: any) => {
        this.submissionError = err?.error?.message || 'An unexpected error occurred. Please try again.';
      }
    });
  }
}