import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagmentComponent } from './car-managment.component';

describe('CarManagmentComponent', () => {
  let component: CarManagmentComponent;
  let fixture: ComponentFixture<CarManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
