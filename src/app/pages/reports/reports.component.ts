import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  reports = [
    {
      title: 'Daily Sales Report',
      value: '₹12,500',
      date: 'Today'
    },
    {
      title: 'Weekly Orders Report',
      value: '148 Orders',
      date: 'This Week'
    },
    {
      title: 'Monthly Users Report',
      value: '520 Users',
      date: 'This Month'
    },
    {
      title: 'Delivery Report',
      value: '96% Completed',
      date: 'This Month'
    }
  ];

  downloadReport(report: any): void {
    alert(report.title + ' downloaded');
  }
}
