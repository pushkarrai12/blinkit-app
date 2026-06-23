import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/help-support/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
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
import { ProductCardComponent } from './components/product-card/product-card.component';
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

const routes: Routes = [ { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    {path:'header', component:HeaderComponent},
    { path: 'checkout', component: CheckoutComponent },
    { path: 'order-success', component: OrderSuccessComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'delivery-tracking', component: DeliveryTrackingComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'help-support', component: HelpSupportComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'delivery-boy', component: DeliveryBoyComponent },
    { path: 'seller-dashboard', component: SellerDashboardComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'notifications', component: NotificationsComponent },
    {
    path: 'coupon', component: CouponComponent},
    {
  path: 'product-card',component: ProductCardComponent
},
{ path: 'search-results', component: SearchResultsComponent },
{ path: 'address-management', component: AddressManagementComponent },
{ path: 'wallet', component: WalletComponent },
{ path: 'coupon-management', component: CouponManagementComponent },
{ path: 'analytics-dashboard', component: AnalyticsDashboardComponent },
{ path: 'reports', component: ReportsComponent },
{ path: 'user-management', component: UserManagementComponent },
{ path: 'inventory-management', component: InventoryManagementComponent },
{ path: 'delivery-history', component: DeliveryHistoryComponent },
{ path: 'rider-earnings', component: RiderEarningsComponent },
{ path: 'rider-availability', component: RiderAvailabilityComponent },
{ path: 'seller-orders', component: SellerOrdersComponent },
{ path: 'membership', component: MembershipComponent },
{ path: 'referral', component: ReferralComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
