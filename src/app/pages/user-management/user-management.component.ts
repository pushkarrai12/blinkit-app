import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
 users: User[] = [
    { name: 'Pushkar Rai', email: 'pushkar@gmail.com', role: 'Customer', status: 'Active' },
    { name: 'Rahul Kumar', email: 'rahul@gmail.com', role: 'Delivery Boy', status: 'Active' },
    { name: 'Amit Seller', email: 'seller@gmail.com', role: 'Seller', status: 'Blocked' }
  ];

  toggleStatus(user: User): void {
    user.status = user.status === 'Active' ? 'Blocked' : 'Active';
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
}
