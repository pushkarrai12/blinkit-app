import { Component } from '@angular/core';

interface SellerProduct {
  name: string;
  price: number;
  stock: number;
  image: string;
}

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styles: [`
    .seller-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .hero {
      background: linear-gradient(135deg, #111827, #0aad0a);
      color: white;
      padding: 35px;
      border-radius: 28px;
      margin-bottom: 30px;
    }

    .hero h1 {
      margin: 0;
      font-size: 38px;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: white;
      padding: 25px;
      border-radius: 22px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    }

    .stat-card h3 {
      margin: 0 0 10px;
      color: #666;
    }

    .stat-card p {
      margin: 0;
      font-size: 32px;
      font-weight: 900;
    }

    .seller-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 25px;
    }

    .add-box,
    .products-box {
      background: white;
      padding: 28px;
      border-radius: 24px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    }

    .add-box input {
      width: 100%;
      padding: 14px;
      border-radius: 12px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      box-sizing: border-box;
    }

    .add-btn {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 14px;
      background: #0aad0a;
      color: white;
      font-weight: 800;
      cursor: pointer;
    }

    .product-card {
      display: flex;
      align-items: center;
      gap: 16px;
      background: #f7f8fa;
      padding: 14px;
      border-radius: 18px;
      margin-bottom: 15px;
    }

    .product-card img {
      width: 80px;
      height: 80px;
      border-radius: 14px;
      object-fit: cover;
    }

    .delete-btn {
      margin-left: auto;
      border: none;
      background: #ffecec;
      color: #e63946;
      padding: 10px 14px;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
    }

    @media(max-width: 900px) {

      .seller-page {
        padding: 20px;
      }

      .stats,
      .seller-grid {
        grid-template-columns: 1fr;
      }

    }
  `]
})
export class SellerDashboardComponent {

  earnings = 18500;
  totalOrders = 82;

  product = {
    name: '',
    price: '',
    stock: '',
    image: ''
  };

  products: SellerProduct[] = [
    {
      name: 'Fresh Apple',
      price: 180,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6'
    }
  ];

  addProduct(): void {

    if (
      !this.product.name ||
      !this.product.price ||
      !this.product.stock ||
      !this.product.image
    ) {
      alert('Fill all fields');
      return;
    }

    this.products.push({
      name: this.product.name,
      price: Number(this.product.price),
      stock: Number(this.product.stock),
      image: this.product.image
    });

    this.product = {
      name: '',
      price: '',
      stock: '',
      image: ''
    };

    alert('Product Added');

  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

}
