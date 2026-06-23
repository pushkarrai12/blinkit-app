import { Component } from '@angular/core';

interface Earning {
  orderId: number;
  date: string;
  distance: string;
  amount: number;
  bonus: number;
}

@Component({
  selector: 'app-rider-earnings',
  templateUrl: './rider-earnings.component.html',
  styleUrls: ['./rider-earnings.component.scss']
})
export class RiderEarningsComponent {

  earnings: Earning[] = [
    { orderId: 1001, date: '10 May 2026', distance: '3.2 km', amount: 45, bonus: 10 },
    { orderId: 1002, date: '10 May 2026', distance: '2.1 km', amount: 35, bonus: 5 },
    { orderId: 1003, date: '09 May 2026', distance: '4.5 km', amount: 60, bonus: 15 }
  ];

  getTotalEarnings(): number {
    return this.earnings.reduce((total, item) => {
      return total + item.amount + item.bonus;
    }, 0);
  }

  getTotalOrders(): number {
    return this.earnings.length;
  }
}