import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [`
    .categories-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .category-hero {
      background: linear-gradient(135deg, #e8ffe8, #fff6cf);
      padding: 45px;
      border-radius: 28px;
      margin-bottom: 30px;
    }

    .category-hero h1 {
      margin: 0;
      font-size: 42px;
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }

    .category-card {
      background: white;
      padding: 30px;
      border-radius: 24px;
      text-align: center;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
      cursor: pointer;
      transition: 0.3s;
      animation: fadeUp 0.5s ease;
    }

    .category-card:hover {
      transform: translateY(-8px);
      background: #efffed;
    }

    .icon {
      font-size: 44px;
      margin-bottom: 14px;
    }

    .category-card h3 {
      margin: 0 0 8px;
    }

    .category-card p {
      color: #666;
      margin: 0;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media(max-width: 900px) {
      .category-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .categories-page {
        padding: 20px;
      }
    }
  `]
})
export class CategoriesComponent {

  categories = [
    { icon: '🥛', name: 'Dairy', items: 24 },
    { icon: '🍎', name: 'Fruits', items: 32 },
    { icon: '🥦', name: 'Vegetables', items: 40 },
    { icon: '🍞', name: 'Bakery', items: 18 },
    { icon: '🥤', name: 'Drinks', items: 22 },
    { icon: '🍫', name: 'Snacks', items: 45 },
    { icon: '🧼', name: 'Household', items: 28 },
    { icon: '🍚', name: 'Grocery', items: 35 }
  ];

  openCategory(name: string): void {
    alert(name + ' category open');
  }
}