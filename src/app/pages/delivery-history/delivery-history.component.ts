
import { Component } from '@angular/core';

interface DeliveryHistory {
  orderId: number;
  customer: string;
  address: string;
  amount: number;
  date: string;
  status: string;
}

@Component({
  selector: 'app-delivery-history',
  templateUrl: './delivery-history.component.html',
  styleUrls: ['./delivery-history.component.scss']
})
export class DeliveryHistoryComponent {

  history: DeliveryHistory[] = [
    {
      orderId: 1001,
      customer: 'Pushkar Rai',
      address: 'Azamgarh, Uttar Pradesh',
      amount: 540,
      date: '10 May 2026',
      status: 'Delivered'
    },
    {
      orderId: 1002,
      customer: 'Rahul Kumar',
      address: 'Lucknow, Uttar Pradesh',
      amount: 320,
      date: '09 May 2026',
      status: 'Delivered'
    },
    {
      orderId: 1003,
      customer: 'Amit Singh',
      address: 'Delhi, India',
      amount: 780,
      date: '08 May 2026',
      status: 'Cancelled'
    }
  ];

}