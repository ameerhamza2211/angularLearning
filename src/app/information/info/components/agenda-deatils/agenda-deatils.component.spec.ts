import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDeatilsComponent } from './agenda-deatils.component';

describe('AgendaDeatilsComponent', () => {
  let component: AgendaDeatilsComponent;
  let fixture: ComponentFixture<AgendaDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaDeatilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendaDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
