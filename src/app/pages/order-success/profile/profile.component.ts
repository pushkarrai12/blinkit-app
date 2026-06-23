import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    .profile-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .profile-card {
      max-width: 700px;
      margin: auto;
      background: white;
      padding: 40px;
      border-radius: 28px;
      box-shadow: 0 12px 35px rgba(0,0,0,0.08);
      animation: fadeUp 0.6s ease;
    }

    .profile-top {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
    }

    .profile-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #0aad0a;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-weight: 900;
    }

    .profile-info h2 {
      margin: 0;
    }

    .profile-info p {
      color: #666;
      margin: 8px 0 0;
    }

    .profile-section {
      margin-top: 30px;
    }

    .profile-section h3 {
      margin-bottom: 15px;
    }

    .order-card {
      background: #f7f8fa;
      padding: 18px;
      border-radius: 18px;
      margin-bottom: 15px;
    }

    .logout-btn {
      width: 100%;
      margin-top: 30px;
      padding: 15px;
      border: none;
      background: #e63946;
      color: white;
      border-radius: 14px;
      font-weight: 800;
      cursor: pointer;
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

    @media(max-width: 700px) {

      .profile-page {
        padding: 20px;
      }

      .profile-top {
        flex-direction: column;
        text-align: center;
      }

    }
  `]
})
export class ProfileComponent implements OnInit {

  user: any = null;

  orders = [
    {
      id: 101,
      items: 4,
      total: 540
    },
    {
      id: 102,
      items: 2,
      total: 260
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {

    const data = localStorage.getItem('user');

    this.user = data ? JSON.parse(data) : null;

  }

  logout(): void {

    localStorage.removeItem('isLoggedIn');

    alert('Logged Out');

    this.router.navigate(['/login']);

  }

}
