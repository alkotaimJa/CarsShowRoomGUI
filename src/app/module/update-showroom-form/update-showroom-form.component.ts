import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShowroomService } from '../../service/showroom.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-showroom-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-showroom-form.component.html',
  styleUrl: './update-showroom-form.component.css'
})
export class UpdateShowroomFormComponent {
  showroomForm: FormGroup;
  showroomId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private showroomService: ShowroomService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.showroomForm = this.fb.group({
      manager_name: ['', [Validators.maxLength(100)]],
      contact_number: ['', [Validators.required, Validators.pattern(/^\d{1,15}$/)]],
      address: ['', [Validators.maxLength(255)]]
    });
  }

  ngOnInit(): void {
    this.showroomId = this.route.snapshot.paramMap.get('id');
    if (this.showroomId) {
      this.loadShowroomDetails(this.showroomId);
    }
  }
  loadShowroomDetails(showroomId: string) {
    this.showroomService.viewShowroom(showroomId).subscribe(
      (data) => {
        this.showroomForm.patchValue(data);
      },
      (error) => {
        console.error('Error fetching showroom details', error);
      }
    );
  }

  onSubmit(): void {
    if (this.showroomForm.valid && this.showroomId) {
      this.showroomService.updateShowroom(this.showroomId, this.showroomForm.value).subscribe(
        () => {
          alert('Showroom updated successfully!');
          window.location.reload();
        },
        (error) => {
          console.error('Error updating showroom', error);
        }
      );
    }
  }
}

