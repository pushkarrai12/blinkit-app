
import { Component } from '@angular/core';

interface Address {
  name: string;
  mobile: string;
  city: string;
  fullAddress: string;
  type: string;
}

@Component({
  selector: 'app-address-management',
  templateUrl: './address-management.component.html',
  styleUrls: ['./address-management.component.scss']
})
export class AddressManagementComponent {

  address: Address = {
    name: '',
    mobile: '',
    city: '',
    fullAddress: '',
    type: 'Home'
  };

  addresses: Address[] = [];

  addAddress(): void {
    if (!this.address.name || !this.address.mobile || !this.address.city || !this.address.fullAddress) {
      alert('Please fill all fields');
      return;
    }

    this.addresses.push({ ...this.address });

    this.address = {
      name: '',
      mobile: '',
      city: '',
      fullAddress: '',
      type: 'Home'
    };
  }

  deleteAddress(index: number): void {
    this.addresses.splice(index, 1);
  }
}