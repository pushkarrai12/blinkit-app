import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderEarningsComponent } from './rider-earnings.component';

describe('RiderEarningsComponent', () => {
  let component: RiderEarningsComponent;
  let fixture: ComponentFixture<RiderEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderEarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
