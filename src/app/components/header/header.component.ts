import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
detectLocation() {
throw new Error('Method not implemented.');
}

  menuOpen = false;
  showLocationPopup = false;

  cartItems: any[] = [];
  searchText: string = '';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  openLocationPopup(): void {
    this.showLocationPopup = true;
  }

  closeLocationPopup(): void {
    this.showLocationPopup = false;
  }

  goHome(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToCategories(): void {
    document.querySelector('.categories')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrollToProducts(): void {
    document.querySelector('.products')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}