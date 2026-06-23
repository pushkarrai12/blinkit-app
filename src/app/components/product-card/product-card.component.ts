import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  constructor(private router: Router) {}

  products = [
    {
      id: 1,
      name: 'Fresh Banana',
      weight: '1 dozen',
      price: 45,
      oldPrice: 60,
      discount: 25,
      image: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png'
    },
    {
      id: 2,
      name: 'Amul Milk',
      weight: '500 ml',
      price: 28,
      oldPrice: 32,
      discount: 10,
      image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
    },
    {
      id: 3,
      name: 'Tomato',
      weight: '1 kg',
      price: 35,
      oldPrice: 50,
      discount: 30,
      image: 'https://cdn-icons-png.flaticon.com/512/2909/2909894.png'
    },
    {
      id: 4,
      name: 'Bread',
      weight: '400 g',
      price: 40,
      oldPrice: 45,
      discount: 12,
      image: 'https://cdn-icons-png.flaticon.com/512/3014/3014502.png'
    }
    ,
  {
    id: 1,
    name: 'Fresh Banana',
    weight: '1 dozen',
    price: 45,
    oldPrice: 60,
    discount: 25,
    image: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png'
  },
  {
    id: 2,
    name: 'Amul Milk',
    weight: '500 ml',
    price: 28,
    oldPrice: 32,
    discount: 10,
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
  },
  {
    id: 3,
    name: 'Tomato',
    weight: '1 kg',
    price: 35,
    oldPrice: 50,
    discount: 30,
    image: 'https://cdn-icons-png.flaticon.com/512/2909/2909894.png'
  },
  {
    id: 4,
    name: 'Bread',
    weight: '400 g',
    price: 40,
    oldPrice: 45,
    discount: 12,
    image: 'https://cdn-icons-png.flaticon.com/512/3014/3014502.png'
  },
  {
    id: 5,
    name: 'Apple',
    weight: '1 kg',
    price: 180,
    oldPrice: 220,
    discount: 18,
    image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png'
  },
  {
    id: 6,
    name: 'Potato',
    weight: '1 kg',
    price: 30,
    oldPrice: 40,
    discount: 20,
    image: 'https://cdn-icons-png.flaticon.com/512/765/765560.png'
  },
  {
    id: 7,
    name: 'Onion',
    weight: '1 kg',
    price: 38,
    oldPrice: 50,
    discount: 15,
    image: 'https://cdn-icons-png.flaticon.com/512/2909/2909877.png'
  },
  {
    id: 8,
    name: 'Carrot',
    weight: '500 g',
    price: 28,
    oldPrice: 35,
    discount: 10,
    image: 'https://cdn-icons-png.flaticon.com/512/5346/5346201.png'
  },
  {
    id: 9,
    name: 'Cabbage',
    weight: '1 pc',
    price: 40,
    oldPrice: 55,
    discount: 12,
    image: 'https://cdn-icons-png.flaticon.com/512/766/766020.png'
  },
  {
    id: 10,
    name: 'Butter',
    weight: '500 g',
    price: 250,
    oldPrice: 290,
    discount: 14,
    image: 'https://cdn-icons-png.flaticon.com/512/2674/2674505.png'
  },
  {
    id: 11,
    name: 'Cheese',
    weight: '200 g',
    price: 120,
    oldPrice: 150,
    discount: 8,
    image: 'https://cdn-icons-png.flaticon.com/512/2713/2713474.png'
  },
  {
    id: 12,
    name: 'Rice',
    weight: '5 kg',
    price: 450,
    oldPrice: 520,
    discount: 20,
    image: 'https://cdn-icons-png.flaticon.com/512/3081/3081985.png'
  },
  {
    id: 13,
    name: 'Sugar',
    weight: '1 kg',
    price: 48,
    oldPrice: 60,
    discount: 10,
    image: 'https://cdn-icons-png.flaticon.com/512/2935/2935415.png'
  },
  {
    id: 14,
    name: 'Tea Powder',
    weight: '500 g',
    price: 210,
    oldPrice: 260,
    discount: 15,
    image: 'https://cdn-icons-png.flaticon.com/512/590/590685.png'
  },
  {
    id: 15,
    name: 'Cooking Oil',
    weight: '1 L',
    price: 145,
    oldPrice: 180,
    discount: 18,
    image: 'https://cdn-icons-png.flaticon.com/512/3082/3082031.png'
  },
  {
    id: 16,
    name: 'Orange',
    weight: '1 kg',
    price: 120,
    oldPrice: 150,
    discount: 22,
    image: 'https://cdn-icons-png.flaticon.com/512/135/135620.png'
  }
];


  

  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProduct = cart.find((item: any) => item.id === product.id);

    if (existingProduct) {
      existingProduct.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(product.name + ' added to cart');

    this.router.navigate(['/cart']);
  }
}