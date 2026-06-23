import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [`
    .details-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .details-card {
      max-width: 1200px;
      margin: auto;
      background: white;
      border-radius: 28px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;
      box-shadow: 0 12px 35px rgba(0,0,0,0.08);
      animation: fadeUp 0.6s ease;
    }

    .product-image {
      background: #f1f5f9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
    }

    .product-image img {
      width: 100%;
      max-width: 420px;
      border-radius: 24px;
    }

    .product-info {
      padding: 45px;
    }

    .rating {
      display: inline-block;
      background: #0aad0a;
      color: white;
      padding: 6px 12px;
      border-radius: 10px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .product-info h1 {
      margin: 0;
      font-size: 42px;
    }

    .price {
      font-size: 34px;
      font-weight: 900;
      margin: 20px 0;
      color: #111827;
    }

    .desc {
      color: #555;
      line-height: 1.7;
      margin-bottom: 30px;
    }

    .qty-box {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 30px;
    }

    .qty-box button {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 10px;
      background: #eaffea;
      color: #0aad0a;
      font-size: 22px;
      font-weight: 800;
      cursor: pointer;
    }

    .action-buttons {
      display: flex;
      gap: 16px;
      margin-bottom: 30px;
    }

    .cart-btn,
    .buy-btn {
      flex: 1;
      padding: 16px;
      border: none;
      border-radius: 14px;
      font-weight: 800;
      cursor: pointer;
      font-size: 16px;
    }

    .cart-btn {
      background: #111827;
      color: white;
    }

    .buy-btn {
      background: #0aad0a;
      color: white;
    }

    .delivery-info {
      background: #f7f8fa;
      padding: 18px;
      border-radius: 18px;
    }

    .delivery-info p {
      margin: 10px 0;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media(max-width: 900px) {

      .details-page {
        padding: 20px;
      }

      .details-card {
        grid-template-columns: 1fr;
      }

      .product-info {
        padding: 25px;
      }

      .product-info h1 {
        font-size: 32px;
      }

    }
  `]
})
export class ProductDetailsComponent {

  qty = 1;

  product = {
    name: 'Fresh Organic Apple',
    price: 180,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    rating: 4.8,
    description:
      'Fresh organic apples directly from farms. Rich in vitamins and perfect for healthy lifestyle.'
  };

  increaseQty(): void {
    this.qty++;
  }

  decreaseQty(): void {
    if (this.qty > 1) {
      this.qty--;
    }
  }

  addToCart(): void {
    alert('Product added to cart');
  }

  buyNow(): void {
    alert('Proceeding to checkout');
  }

}