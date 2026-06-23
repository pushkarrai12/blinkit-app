
import { Component } from '@angular/core';

interface Plan {
  name: string;
  price: number;
  duration: string;
  benefits: string[];
}

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent {

  plans: Plan[] = [
    {
      name: 'Silver Prime',
      price: 99,
      duration: '1 Month',
      benefits: [
        'Free Delivery',
        'Priority Support',
        'Special Offers'
      ]
    },
    {
      name: 'Gold Prime',
      price: 249,
      duration: '3 Months',
      benefits: [
        'Unlimited Free Delivery',
        'Extra Cashback',
        'VIP Support',
        'Fast Delivery'
      ]
    },
    {
      name: 'Platinum Prime',
      price: 799,
      duration: '1 Year',
      benefits: [
        'Unlimited Delivery',
        'Exclusive Deals',
        'Premium Support',
        'Free Gift Coupons'
      ]
    }
  ];

  subscribe(plan: Plan): void {
    alert('Subscribed to ' + plan.name);
  }

}