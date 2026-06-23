
import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styles: [`
    .search-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .search-top {
      background: white;
      padding: 25px;
      border-radius: 24px;
      margin-bottom: 30px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    }

    .search-top input,
    .search-top select {
      width: 100%;
      padding: 14px;
      border-radius: 12px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      box-sizing: border-box;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }

    .product-card {
      background: white;
      padding: 18px;
      border-radius: 22px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
      transition: 0.3s;
      cursor: pointer;
    }

    .product-card:hover {
      transform: translateY(-8px);
    }

    .product-card img {
      width: 100%;
      height: 170px;
      object-fit: cover;
      border-radius: 16px;
    }

    .product-card h3 {
      margin: 14px 0 6px;
    }

    .product-card p {
      color: #666;
      margin: 0 0 10px;
    }

    .price {
      font-weight: 900;
      margin-bottom: 14px;
    }

    .product-card button {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 12px;
      background: #0aad0a;
      color: white;
      font-weight: 800;
      cursor: pointer;
    }

    .empty-box {
      background: white;
      padding: 50px;
      border-radius: 24px;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
    }

    @media(max-width: 900px) {

      .search-page {
        padding: 20px;
      }

      .products-grid {
        grid-template-columns: repeat(2, 1fr);
      }

    }
  `]
})
export class SearchResultsComponent {

  searchText = '';
  selectedCategory = 'All';

  products: Product[] = [
    {
      name: 'Fresh Apple',
      price: 180,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6'
    },
    {
      name: 'Amul Milk',
      price: 30,
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b'
    },
    {
      name: 'Brown Bread',
      price: 40,
      category: 'Bakery',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
    },
    {
      name: 'Potato Chips',
      price: 20,
      category: 'Snacks',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b'
    },
      { name: 'Fresh Apple', category: 'Fruits', price: 180, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500' },
  { name: 'Banana', category: 'Fruits', price: 60, image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e37f?w=500' },
  { name: 'Orange', category: 'Fruits', price: 120, image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=500' },
  { name: 'Mango', category: 'Fruits', price: 150, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500' },

  { name: 'Amul Milk', category: 'Dairy', price: 30, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500' },
  { name: 'Curd', category: 'Dairy', price: 45, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500' },
  { name: 'Butter', category: 'Dairy', price: 55, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500' },
  { name: 'Paneer', category: 'Dairy', price: 90, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500' },

  { name: 'Brown Bread', category: 'Bakery', price: 40, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500' },
  { name: 'Burger Bun', category: 'Bakery', price: 35, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500' },
  { name: 'Cake', category: 'Bakery', price: 250, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
  { name: 'Cookies', category: 'Bakery', price: 80, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500' },

  { name: 'Potato Chips', category: 'Snacks', price: 20, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500' },
  { name: 'Nachos', category: 'Snacks', price: 60, image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500' },
  { name: 'Popcorn', category: 'Snacks', price: 50, image: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=500' },
  { name: 'Chocolate', category: 'Snacks', price: 40, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500' },

  { name: 'Tomato', category: 'Vegetables', price: 40, image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg' },
  { name: 'Potato', category: 'Vegetables', price: 25, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500' },
  { name: 'Onion', category: 'Vegetables', price: 35, image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=500' },
  { name: 'Carrot', category: 'Vegetables', price: 30, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500' },

  { name: 'Cabbage', category: 'Vegetables', price: 35, image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500' },
  { name: 'Brinjal', category: 'Vegetables', price: 38, image: 'https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg' },
  { name: 'Cucumber', category: 'Vegetables', price: 28, image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500' },
  { name: 'Capsicum', category: 'Vegetables', price: 55, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500' },

  { name: 'Coca Cola', category: 'Drinks', price: 45, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500' },
  { name: 'Pepsi', category: 'Drinks', price: 45, image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500' },
  { name: 'Sprite', category: 'Drinks', price: 40, image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500' },
  { name: 'Mazza', category: 'Drinks', price: 35, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },

  { name: 'Tea Powder', category: 'Grocery', price: 180, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500' },
  { name: 'Sugar', category: 'Grocery', price: 45, image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500' }
  ];

  get filteredProducts(): Product[] {

    return this.products.filter(product => {

      const matchesSearch =
        product.name.toLowerCase()
        .includes(this.searchText.toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }

  addToCart(product: Product): void {

    const oldCart = localStorage.getItem('cart');

    const cartItems = oldCart ? JSON.parse(oldCart) : [];

    cartItems.push({
      ...product,
      qty: 1
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert(product.name + ' added to cart');

  }

}