import { Component } from '@angular/core';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent {
referralCode = 'QUICK100';
  copied = false;

  friends = [
    { name: 'Rahul Kumar', reward: 50, status: 'Joined' },
    { name: 'Amit Singh', reward: 50, status: 'Pending' }
  ];

  copyCode(): void {
    navigator.clipboard.writeText(this.referralCode);
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
