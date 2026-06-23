import { Component } from '@angular/core';

interface SellerOrder {
  id: number;
  customer: string;
  product: string;
  qty: number;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.scss']
})
export class SellerOrdersComponent {

  orders: SellerOrder[] = [
    {
      id: 1001,
      customer: 'Pushkar Rai',
      product: 'Amul Milk',
      qty: 2,
      amount: 60,
      status: 'Pending'
    },
    {
      id: 1002,
      customer: 'Rahul Kumar',
      product: 'Fresh Apple',
      qty: 1,
      amount: 180,
      status: 'Packed'
    },
    {
      id: 1003,
      customer: 'Amit Singh',
      product: 'Brown Bread',
      qty: 3,
      amount: 120,
      status: 'Delivered'
    }
  ];

  updateStatus(order: SellerOrder, status: string): void {
    order.status = status;
  }

}
