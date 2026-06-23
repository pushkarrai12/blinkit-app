import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  qty?: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: Product[] = [];

  name = '';
  mobile = '';
  address = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('cart');
    this.cartItems = data ? JSON.parse(data) : [];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + item.price * (item.qty || 1);
    }, 0);
  }

  placeOrder(): void {

    if (!this.name || !this.mobile || !this.address) {
      alert('Please fill all details');
      return;
    }

    const order = {
      customerName: this.name,
      mobile: this.mobile,
      address: this.address,
      items: this.cartItems,
      total: this.getTotal() + 20
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));

    localStorage.removeItem('cart');

    alert('Order placed successfully');

    this.router.navigate(['/order-success']);
  }
}
