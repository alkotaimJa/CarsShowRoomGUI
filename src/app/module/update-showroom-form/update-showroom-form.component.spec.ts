import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShowroomFormComponent } from './update-showroom-form.component';

describe('UpdateShowroomFormComponent', () => {
  let component: UpdateShowroomFormComponent;
  let fixture: ComponentFixture<UpdateShowroomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateShowroomFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShowroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
