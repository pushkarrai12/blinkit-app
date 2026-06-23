import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  walletForm!: FormGroup;

  balance = 1200;

  transactions = [
    {
      type: 'Added',
      amount: 500
    },
    {
      type: 'Spent',
      amount: 200
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.walletForm = this.fb.group({
      amount: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ]
    });

  }

  addMoney(): void {

    if (this.walletForm.invalid) {
      this.walletForm.markAllAsTouched();
      return;
    }

    const amount =
      Number(this.walletForm.value.amount);

    this.balance += amount;

    this.transactions.unshift({
      type: 'Added',
      amount
    });

    this.walletForm.reset();

  }

}