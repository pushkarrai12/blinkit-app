
import { Component } from '@angular/core';

interface InventoryItem {
  name: string;
  category: string;
  stock: number;
  price: number;
  status: string;
}

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent {

  items: InventoryItem[] = [
    {
      name: 'Amul Milk',
      category: 'Dairy',
      stock: 25,
      price: 30,
      status: 'In Stock'
    },
    {
      name: 'Brown Bread',
      category: 'Bakery',
      stock: 5,
      price: 40,
      status: 'Low Stock'
    },
    {
      name: 'Fresh Apple',
      category: 'Fruits',
      stock: 0,
      price: 180,
      status: 'Out of Stock'
    }
  ];

  increaseStock(item: InventoryItem): void {
    item.stock += 1;
    this.updateStatus(item);
  }

  decreaseStock(item: InventoryItem): void {
    if (item.stock > 0) {
      item.stock -= 1;
      this.updateStatus(item);
    }
  }

  updateStatus(item: InventoryItem): void {
    if (item.stock === 0) {
      item.status = 'Out of Stock';
    } else if (item.stock <= 5) {
      item.status = 'Low Stock';
    } else {
      item.status = 'In Stock';
    }
  }
}