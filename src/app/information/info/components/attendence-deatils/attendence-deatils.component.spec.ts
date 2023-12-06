import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceDeatilsComponent } from './attendence-deatils.component';

describe('AttendenceDeatilsComponent', () => {
  let component: AttendenceDeatilsComponent;
  let fixture: ComponentFixture<AttendenceDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendenceDeatilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendenceDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
