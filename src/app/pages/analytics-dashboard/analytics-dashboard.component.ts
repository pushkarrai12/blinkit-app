import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss']
})
export class AnalyticsDashboardComponent {
totalSales = 45200;
  totalOrders = 328;
  totalUsers = 148;
  totalProducts = 86;

  recentActivities = [
    'New order placed by Pushkar Rai',
    'Seller added new product',
    'Coupon SAVE100 applied',
    'Delivery completed successfully'
  ];
}
