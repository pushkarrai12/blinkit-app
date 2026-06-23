import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [`
    .orders-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .orders-header {
      background: linear-gradient(135deg, #e8ffe8, #fff6cf);
      padding: 40px;
      border-radius: 28px;
      margin-bottom: 30px;
    }

    .orders-header h1 {
      margin: 0;
      font-size: 42px;
    }

    .order-card {
      background: white;
      padding: 25px;
      border-radius: 22px;
      margin-bottom: 20px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
      animation: fadeUp 0.5s ease;
    }

    .order-top {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      flex-wrap: wrap;
    }

    .status {
      background: #eaffea;
      color: #0aad0a;
      padding: 8px 14px;
      border-radius: 50px;
      font-weight: 800;
    }

    .items {
      margin-top: 18px;
      display: grid;
      gap: 12px;
    }

    .item {
      display: flex;
      justify-content: space-between;
      background: #f7f8fa;
      padding: 14px;
      border-radius: 14px;
    }

    .track-btn {
      margin-top: 18px;
      padding: 13px 22px;
      border: none;
      border-radius: 14px;
      background: #0aad0a;
      color: white;
      font-weight: 800;
      cursor: pointer;
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
  `]
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  ngOnInit(): void {
    const lastOrder = localStorage.getItem('lastOrder');

    if (lastOrder) {
      this.orders = [
        {
          id: 1001,
          status: 'Delivered',
          date: new Date().toLocaleDateString(),
          ...JSON.parse(lastOrder)
        }
      ];
    } else {
      this.orders = [
        {
          id: 1001,
          status: 'Delivered',
          date: '10 May 2026',
          customerName: 'Guest User',
          total: 299,
          items: [
            { name: 'Amul Milk', qty: 2, price: 30 },
            { name: 'Brown Bread', qty: 1, price: 40 }
          ]
        }
      ];
    }
  }
}
