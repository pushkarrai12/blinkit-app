import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styles: [`
    .notification-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .notification-card {
      max-width: 850px;
      margin: auto;
      background: white;
      padding: 35px;
      border-radius: 28px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }

    .notify-item {
      display: flex;
      gap: 16px;
      background: #f7f8fa;
      padding: 18px;
      border-radius: 18px;
      margin: 15px 0;
      animation: fadeUp 0.5s ease;
    }

    .icon {
      font-size: 32px;
    }

    .notify-item h3 {
      margin: 0 0 6px;
    }

    .notify-item p {
      margin: 0;
      color: #666;
    }

    .clear-btn {
      margin-top: 20px;
      border: none;
      background: #e63946;
      color: white;
      padding: 14px 22px;
      border-radius: 14px;
      font-weight: 800;
      cursor: pointer;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class NotificationsComponent {
  notifications = [
    {
      icon: '📦',
      title: 'Order Confirmed',
      message: 'Your order has been placed successfully.'
    },
    {
      icon: '🚚',
      title: 'Out for Delivery',
      message: 'Delivery partner is on the way.'
    },
    {
      icon: '🎁',
      title: 'New Offer',
      message: 'Get ₹100 OFF on orders above ₹499.'
    }
  ];

  clearAll(): void {
    this.notifications = [];
  }
}