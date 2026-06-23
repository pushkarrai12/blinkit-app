import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categories = [
    'Fruits & Vegetables',
    'Dairy & Breakfast',
    'Snacks',
    'Cold Drinks',
    'Bakery',
    'Household'
  ];

  products = [
    { name: 'Amul Milk', price: 30, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b' },
    { name: 'Fresh Banana', price: 50, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919' },
    { name: 'Bread', price: 40, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' },
    { name: 'Cold Drink', price: 45, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97' }
  ];

  filteredProducts: any[] = [];

  groceryProducts = [
    {
      name: 'Aashirvaad Atta',
      qty: '5 kg',
      price: 230,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500'
    },
    {
      name: 'Basmati Rice',
      qty: '1 kg',
      price: 120,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500'
    },
    {
      name: 'Sugar',
      qty: '1 kg',
      price: 45,
      image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500'
    },
    {
      name: 'Cooking Oil',
      qty: '1 L',
      price: 150,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500'
    },
    {
      name: 'Toor Dal',
      qty: '1 kg',
      price: 140,
      image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=500'
    },
    {
      name: 'Salt',
      qty: '1 kg',
      price: 25,
      image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=500'
    },
    {
      name: 'Tea Powder',
      qty: '500 g',
      price: 180,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500'
    },
    {
      name: 'Maggi Noodles',
      qty: 'Pack',
      price: 15,
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500'
    },
    {
      name: 'Biscuits',
      qty: '200 g',
      price: 30,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500'
    },
    {
      name: 'Detergent Powder',
      qty: '1 kg',
      price: 110,
      image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=500'
    }
  ];

  vegetables = [
    {
      name: 'Fresh Tomato',
      qty: '1 kg',
      oldPrice: 60,
      price: 40,
      offer: '20% OFF',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg'
    },
    {
      name: 'Potato',
      qty: '1 kg',
      oldPrice: 40,
      price: 25,
      offer: '15% OFF',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500'
    },
    {
      name: 'Onion',
      qty: '1 kg',
      oldPrice: 50,
      price: 35,
      offer: '10% OFF',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=500'
    },
    {
      name: 'Carrot',
      qty: '500 g',
      oldPrice: 45,
      price: 30,
      offer: 'Fresh',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500'
    },
    {
      name: 'Capsicum',
      qty: '500 g',
      oldPrice: 70,
      price: 55,
      offer: '12% OFF',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500'
    },
    {
      name: 'Cabbage',
      qty: '1 piece',
      oldPrice: 50,
      price: 35,
      offer: 'Best',
      image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500'
    },
    {
      name: 'Cauliflower',
      qty: '1 piece',
      oldPrice: 60,
      price: 45,
      offer: 'Fresh',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'
    },
    {
      name: 'Green Chilli',
      qty: '250 g',
      oldPrice: 30,
      price: 20,
      offer: 'Hot',
      image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=500'
    },
    {
      name: 'Brinjal',
      qty: '500 g',
      oldPrice: 55,
      price: 38,
      offer: '18% OFF',
      image: 'https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg'
    },
    {
      name: 'Cucumber',
      qty: '500 g',
      oldPrice: 45,
      price: 28,
      offer: 'Cool',
      image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500'
    }
  ];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  addToCart(item: any) {
    alert(item.name + ' cart me add ho gaya');
    this.router.navigate(['/cart']);
  }

  addVegetable(item: any) {
    this.addToCart(item);
  }
}
