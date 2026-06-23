import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  name: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products: Product[] = [];

  product = {
    name: '',
    price: '',
    category: '',
    image: ''
  };

  totalOrders = 18;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const role = localStorage.getItem('role');

    if (role !== 'admin') {
      alert('Only admin can access this page');
      this.router.navigate(['/login']);
      return;
    }

    const data = localStorage.getItem('adminProducts');
    this.products = data ? JSON.parse(data) : [];
  }

  addProduct(): void {
    if (!this.product.name || !this.product.price || !this.product.category || !this.product.image) {
      alert('Fill all fields');
      return;
    }

    this.products.push({
      name: this.product.name,
      price: Number(this.product.price),
      category: this.product.category,
      image: this.product.image
    });

    localStorage.setItem('adminProducts', JSON.stringify(this.products));

    this.product = {
      name: '',
      price: '',
      category: '',
      image: ''
    };

    alert('Product Added');
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
    localStorage.setItem('adminProducts', JSON.stringify(this.products));
  }
  logout(): void {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('role');

  this.router.navigate(['/login']);
}
}