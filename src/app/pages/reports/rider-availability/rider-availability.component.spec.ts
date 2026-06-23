import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderAvailabilityComponent } from './rider-availability.component';

describe('RiderAvailabilityComponent', () => {
  let component: RiderAvailabilityComponent;
  let fixture: ComponentFixture<RiderAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
