import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styles: [`
    .offers-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .offers-header {
      background: linear-gradient(135deg, #0aad0a, #b7ff5a);
      color: white;
      padding: 45px;
      border-radius: 28px;
      margin-bottom: 35px;
      animation: fadeUp 0.6s ease;
    }

    .offers-header h1 {
      font-size: 42px;
      margin: 0;
    }

    .offers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .offer-card {
      background: white;
      padding: 25px;
      border-radius: 24px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
      animation: fadeUp 0.6s ease;
    }

    .coupon {
      background: #fff6cf;
      color: #111;
      padding: 10px 14px;
      border-radius: 12px;
      font-weight: 900;
      display: inline-block;
      margin: 15px 0;
      border: 1px dashed #111;
    }

    .offer-card button {
      width: 100%;
      padding: 14px;
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

    @media(max-width: 900px) {
      .offers-grid {
        grid-template-columns: 1fr;
      }

      .offers-page {
        padding: 20px;
      }
    }
  `]
})
export class OffersComponent {

  offers = [
    {
      title: 'Flat ₹100 OFF',
      desc: 'On orders above ₹499',
      code: 'SAVE100'
    },
    {
      title: 'Free Delivery',
      desc: 'No delivery charge on first order',
      code: 'FREEDEL'
    },
    {
      title: '20% OFF Snacks',
      desc: 'Best deals on chips, biscuits and namkeen',
      code: 'SNACK20'
    }
  ];

  applyOffer(code: string): void {
    alert(code + ' coupon applied');
  }
}