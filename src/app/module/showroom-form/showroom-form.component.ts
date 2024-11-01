import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShowroomService } from '../../service/showroom.service';

@Component({
  selector: 'app-showroom-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
    
  ],
  templateUrl: './showroom-form.component.html',
  styleUrl: './showroom-form.component.css'
})
export class ShowroomFormComponent {
  showroomForm: FormGroup;
  submissionError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private showroomService: ShowroomService
  ) {
    this.showroomForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      commercial_registration_number: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)]
      ],
      manager_name: ['', [Validators.maxLength(100)]],
      contact_number: [
        '',
        [Validators.required, Validators.pattern(/^\d{1,15}$/)]
      ],
      address: ['', [Validators.maxLength(255)]]
    });
  }

  get f() {
    return this.showroomForm.controls;
  }

  onSubmit(): void {
    if (this.showroomForm.valid) {
      this.showroomService.createShowroom(this.showroomForm.value).subscribe(
        () => {
          alert('Showroom created successfully!');
          this.showroomForm.reset();
        },
        (error) => {
          this.submissionError = 'Failed to create showroom. Please try again.';
          console.error('Error creating showroom:', error);
        }
      );
    }
  }
}

