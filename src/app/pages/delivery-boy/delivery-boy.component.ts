import { Component } from '@angular/core';

interface DeliveryOrder {
  id: number;
  customer: string;
  address: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.component.html',
  styles: [`
    .delivery-page {
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
      color: #555;
    }

    .stat-card p {
      margin: 0;
      font-size: 32px;
      font-weight: 900;
    }

    .order-card {
      background: white;
      padding: 22px;
      border-radius: 22px;
      margin-bottom: 18px;
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

    .actions {
      display: flex;
      gap: 12px;
      margin-top: 18px;
      flex-wrap: wrap;
    }

    .actions button {
      border: none;
      padding: 12px 16px;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
    }

    .accept {
      background: #0aad0a;
      color: white;
    }

    .pickup {
      background: #111827;
      color: white;
    }

    .deliver {
      background: #2563eb;
      color: white;
    }

    .reject {
      background: #ffecec;
      color: #e63946;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(22px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media(max-width: 900px) {
      .delivery-page {
        padding: 20px;
      }

      .stats {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DeliveryBoyComponent {

  riderName = 'Rahul Kumar';
  totalEarning = 1250;
  completedOrders = 14;

  orders: DeliveryOrder[] = [
    {
      id: 1001,
      customer: 'Pushkar Rai',
      address: 'Azamgarh, Uttar Pradesh',
      amount: 540,
      status: 'Assigned'
    },
    {
      id: 1002,
      customer: 'Amit Kumar',
      address: 'Lucknow, Uttar Pradesh',
      amount: 320,
      status: 'Assigned'
    }
  ];

  updateStatus(order: DeliveryOrder, status: string): void {
    order.status = status;
  }

  rejectOrder(index: number): void {
    this.orders.splice(index, 1);
  }
}
