
import { Component } from '@angular/core';

interface WishlistItem {
  name: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styles: [`
    .wishlist-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .wishlist-header {
      background: linear-gradient(135deg, #ffe8ef, #fff6cf);
      padding: 40px;
      border-radius: 28px;
      margin-bottom: 30px;
      animation: fadeUp 0.6s ease;
    }

    .wishlist-header h1 {
      margin: 0;
      font-size: 42px;
    }

    .wishlist-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }

    .wish-card {
      background: white;
      padding: 18px;
      border-radius: 22px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
      animation: fadeUp 0.6s ease;
    }

    .wish-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 16px;
    }

    .wish-card h3 {
      margin: 14px 0 6px;
    }

    .wish-card p {
      color: #777;
      margin: 0 0 8px;
    }

    .price {
      font-weight: 900;
      margin-bottom: 14px;
    }

    .buttons {
      display: flex;
      gap: 10px;
    }

    .buttons button {
      flex: 1;
      padding: 11px;
      border: none;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
    }

    .add-btn {
      background: #0aad0a;
      color: white;
    }

    .remove-btn {
      background: #ffecec;
      color: #e63946;
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
      .wishlist-page {
        padding: 20px;
      }

      .wishlist-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class WishlistComponent {

  items: WishlistItem[] = [
    {
      name: 'Amul Milk',
      price: 30,
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b'
    },
    {
      name: 'Fresh Banana',
      price: 50,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919'
    },
    {
      name: 'Brown Bread',
      price: 40,
      category: 'Bakery',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
    }
  ];
  groceryProducts = [
  {
    id: 1,
    name: 'Fresh Apple',
    weight: '1 kg',
    price: 180,
    oldPrice: 220,
    image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png'
  },
  {
    id: 2,
    name: 'Banana',
    weight: '1 dozen',
    price: 45,
    oldPrice: 60,
    image: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png'
  },
  {
    id: 3,
    name: 'Tomato',
    weight: '1 kg',
    price: 35,
    oldPrice: 50,
    image: 'https://cdn-icons-png.flaticon.com/512/2909/2909894.png'
  },
  {
    id: 4,
    name: 'Potato',
    weight: '1 kg',
    price: 30,
    oldPrice: 40,
    image: 'https://cdn-icons-png.flaticon.com/512/765/765560.png'
  },
  {
    id: 5,
    name: 'Onion',
    weight: '1 kg',
    price: 38,
    oldPrice: 50,
    image: 'https://cdn-icons-png.flaticon.com/512/2909/2909877.png'
  },
  {
    id: 6,
    name: 'Carrot',
    weight: '500 g',
    price: 28,
    oldPrice: 35,
    image: 'https://cdn-icons-png.flaticon.com/512/5346/5346201.png'
  },
  {
    id: 7,
    name: 'Cabbage',
    weight: '1 pc',
    price: 40,
    oldPrice: 55,
    image: 'https://cdn-icons-png.flaticon.com/512/766/766020.png'
  },
  {
    id: 8,
    name: 'Milk',
    weight: '1 L',
    price: 60,
    oldPrice: 65,
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
  },
  {
    id: 9,
    name: 'Bread',
    weight: '400 g',
    price: 45,
    oldPrice: 55,
    image: 'https://cdn-icons-png.flaticon.com/512/3014/3014502.png'
  },
  {
    id: 10,
    name: 'Butter',
    weight: '500 g',
    price: 250,
    oldPrice: 290,
    image: 'https://cdn-icons-png.flaticon.com/512/2674/2674505.png'
  },
  {
    id: 11,
    name: 'Cheese',
    weight: '200 g',
    price: 120,
    oldPrice: 150,
    image: 'https://cdn-icons-png.flaticon.com/512/2713/2713474.png'
  },
  {
    id: 12,
    name: 'Rice',
    weight: '5 kg',
    price: 450,
    oldPrice: 520,
    image: 'https://cdn-icons-png.flaticon.com/512/3081/3081985.png'
  },
  {
    id: 13,
    name: 'Sugar',
    weight: '1 kg',
    price: 48,
    oldPrice: 60,
    image: 'https://cdn-icons-png.flaticon.com/512/2935/2935415.png'
  },
  {
    id: 14,
    name: 'Salt',
    weight: '1 kg',
    price: 20,
    oldPrice: 25,
    image: 'https://cdn-icons-png.flaticon.com/512/2553/2553691.png'
  },
  {
    id: 15,
    name: 'Tea Powder',
    weight: '500 g',
    price: 210,
    oldPrice: 260,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590685.png'
  },
  {
    id: 16,
    name: 'Coffee',
    weight: '250 g',
    price: 180,
    oldPrice: 220,
    image: 'https://cdn-icons-png.flaticon.com/512/924/924514.png'
  },
  {
    id: 17,
    name: 'Maggie',
    weight: '70 g',
    price: 15,
    oldPrice: 18,
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046747.png'
  },
  {
    id: 18,
    name: 'Cooking Oil',
    weight: '1 L',
    price: 145,
    oldPrice: 180,
    image: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png'
  },
  {
    id: 19,
    name: 'Eggs',
    weight: '12 pcs',
    price: 75,
    oldPrice: 90,
    image: 'https://cdn-icons-png.flaticon.com/512/837/837560.png'
  },
  {
    id: 20,
    name: 'Orange',
    weight: '1 kg',
    price: 120,
    oldPrice: 150,
    image: 'https://cdn-icons-png.flaticon.com/512/135/135620.png'
  }
];

  addToCart(item: WishlistItem): void {
    const oldCart = localStorage.getItem('cart');
    const cartItems = oldCart ? JSON.parse(oldCart) : [];

    cartItems.push({
      ...item,
      qty: 1
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(item.name + ' cart mein add ho gaya');
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}