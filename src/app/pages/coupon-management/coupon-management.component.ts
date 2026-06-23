import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
interface Coupon {
  code: string;
  discount: number;
  minOrder: number;
}
@Component({
  selector: 'app-coupon-management',
  templateUrl: './coupon-management.component.html',
  styleUrls: ['./coupon-management.component.scss']
})
export class CouponManagementComponent implements OnInit {

  couponForm!: FormGroup;

  coupons: Coupon[] = [
    {
      code: 'SAVE100',
      discount: 100,
      minOrder: 499
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.couponForm = this.fb.group({
      code: ['', Validators.required],
      discount: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ],
      minOrder: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ]
    });

  }

  addCoupon(): void {

    if (this.couponForm.invalid) {
      this.couponForm.markAllAsTouched();
      return;
    }

    this.coupons.unshift({
      ...this.couponForm.value
    });

    this.couponForm.reset();

  }

  deleteCoupon(index: number): void {
    this.coupons.splice(index, 1);
  }

}