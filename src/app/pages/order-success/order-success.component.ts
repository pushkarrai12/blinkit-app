
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  order: any;

  ngOnInit(): void {
    const data = localStorage.getItem('lastOrder');
    this.order = data ? JSON.parse(data) : null;
  }
}
