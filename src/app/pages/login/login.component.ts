import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .login-page {
      min-height: 100vh;
      background: linear-gradient(135deg, #dfffe0, #fff5cf);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    .login-card {
      width: 100%;
      max-width: 430px;
      background: white;
      padding: 40px;
      border-radius: 28px;
      box-shadow: 0 12px 35px rgba(0,0,0,0.1);
      animation: fadeUp 0.6s ease;
    }

    .login-card h1 { margin: 0; font-size: 36px; }
    .login-card p { color: #666; margin: 12px 0 25px; }

    .login-card input {
      width: 100%;
      padding: 15px;
      border-radius: 14px;
      border: 1px solid #ddd;
      margin-bottom: 18px;
      outline: none;
      font-size: 15px;
      box-sizing: border-box;
    }

    .password-box { position: relative; }

    .password-box button {
      position: absolute;
      right: 10px;
      top: 8px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-weight: 700;
    }

    .login-btn-main {
      width: 100%;
      padding: 15px;
      background: #0aad0a;
      color: white;
      border: none;
      border-radius: 14px;
      font-weight: 800;
      cursor: pointer;
      margin-top: 10px;
    }

    .social-login {
      display: flex;
      gap: 12px;
      margin-top: 20px;
    }

    .social-login button {
      flex: 1;
      padding: 14px;
      border: none;
      border-radius: 12px;
      background: #f1f1f1;
      cursor: pointer;
      font-weight: 700;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class LoginComponent {

  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    if (!this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }

    if (this.email === 'admin@gmail.com' && this.password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      alert('Admin Login Successful');
      this.router.navigate(['/admin']);
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', 'user');
    alert('User Login Successful');
    this.router.navigate(['/']);
  }

}