import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './pages/help-support/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/order-success/profile/profile.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { DeliveryTrackingComponent } from './pages/delivery-tracking/delivery-tracking.component';
import { OffersComponent } from './pages/offers/offers.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { OrdersComponent } from './pages/order-success/orders/orders.component';
import { HelpSupportComponent } from './pages/help-support/help-support.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DeliveryBoyComponent } from './pages/delivery-boy/delivery-boy.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { CouponComponent } from './pages/coupon/coupon.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { AddressManagementComponent } from './pages/address-management/address-management.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { CouponManagementComponent } from './pages/coupon-management/coupon-management.component';
import { AnalyticsDashboardComponent } from './pages/analytics-dashboard/analytics-dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { InventoryManagementComponent } from './pages/inventory-management/inventory-management.component';
import { DeliveryHistoryComponent } from './pages/delivery-history/delivery-history.component';
import { RiderEarningsComponent } from './pages/rider-earnings/rider-earnings.component';
import { RiderAvailabilityComponent } from './pages/reports/rider-availability/rider-availability.component';
import { SellerOrdersComponent } from './pages/seller-orders/seller-orders.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { ReferralComponent } from './pages/referral/referral.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProductDetailsComponent,
    DeliveryTrackingComponent,
    OffersComponent,
    WishlistComponent,
    OrdersComponent,
    HelpSupportComponent,
    CategoriesComponent,
    DeliveryBoyComponent,
    SellerDashboardComponent,
    SettingsComponent,
    NotificationsComponent,
    CouponComponent,
    SearchResultsComponent,
    AddressManagementComponent,
    WalletComponent,
    CouponManagementComponent,
    AnalyticsDashboardComponent,
    ReportsComponent,
    UserManagementComponent,
    InventoryManagementComponent,
    DeliveryHistoryComponent,
    RiderEarningsComponent,
    RiderAvailabilityComponent,
    SellerOrdersComponent,
    MembershipComponent,
    ReferralComponent,
    NotFoundComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
  FormsModule,
   ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
