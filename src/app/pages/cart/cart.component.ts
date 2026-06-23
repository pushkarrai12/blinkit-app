import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  increaseQty(item: any) {
    item.qty = (item.qty || 1) + 1;
    this.saveCart();
  }

  decreaseQty(item: any) {
    if ((item.qty || 1) > 1) {
      item.qty = item.qty - 1;
      this.saveCart();
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => {
      return total + item.price * (item.qty || 1);
    }, 0);
  }

  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  goToProducts() {
    this.router.navigate(['/']);
  }

  goToCouponPage() {
    this.router.navigate(['/coupon']);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}