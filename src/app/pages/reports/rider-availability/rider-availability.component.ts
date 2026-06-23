import { Component } from '@angular/core';

@Component({
  selector: 'app-rider-availability',
  templateUrl: './rider-availability.component.html',
  styleUrls: ['./rider-availability.component.scss']
})
export class RiderAvailabilityComponent {
  isOnline = false;

  toggleStatus(): void {
    this.isOnline = !this.isOnline;
  }
}
