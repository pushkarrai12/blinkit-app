
import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-tracking',
  templateUrl: './delivery-tracking.component.html',
  styles: [`
    .tracking-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .tracking-card {
      max-width: 900px;
      margin: auto;
      background: white;
      padding: 35px;
      border-radius: 28px;
      box-shadow: 0 12px 35px rgba(0,0,0,0.08);
      animation: fadeUp 0.6s ease;
    }

    .map-box {
      height: 280px;
      background: linear-gradient(135deg, #dfffe0, #fff5cf);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      margin: 25px 0;
    }

    .status-list {
      display: grid;
      gap: 18px;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #f7f8fa;
      padding: 18px;
      border-radius: 18px;
    }

    .circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #0aad0a;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
    }

    .rider-box {
      margin-top: 25px;
      background: #111827;
      color: white;
      padding: 20px;
      border-radius: 20px;
    }

    button {
      margin-top: 25px;
      padding: 14px 28px;
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
export class DeliveryTrackingComponent {

}
