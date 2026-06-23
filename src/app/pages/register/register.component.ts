
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    .register-page {
      min-height: 100vh;
      background: linear-gradient(135deg, #dfffe0, #fff5cf);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    .register-card {
      width: 100%;
      max-width: 480px;
      background: white;
      padding: 40px;
      border-radius: 28px;
      box-shadow: 0 12px 35px rgba(0,0,0,0.1);
      animation: fadeUp 0.6s ease;
    }

    .register-card h1 {
      margin: 0;
      font-size: 34px;
    }

    .register-card p {
      color: #666;
      margin: 10px 0 25px;
    }

    .register-card input {
      width: 100%;
      padding: 15px;
      border-radius: 14px;
      border: 1px solid #ddd;
      margin-bottom: 18px;
      outline: none;
      font-size: 15px;
      box-sizing: border-box;
    }

    .password-box {
      position: relative;
    }

    .password-box button {
      position: absolute;
      right: 10px;
      top: 8px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-weight: 700;
    }

    .register-btn {
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

    .login-link {
      text-align: center;
      margin-top: 18px;
    }

    .login-link a {
      color: #0aad0a;
      font-weight: 700;
      text-decoration: none;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class RegisterComponent {

  name = '';
  email = '';
  mobile = '';
  password = '';
  confirmPassword = '';

  showPassword = false;

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  register(): void {

    if (
      !this.name ||
      !this.email ||
      !this.mobile ||
      !this.password ||
      !this.confirmPassword
    ) {
      alert('Please fill all fields');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      mobile: this.mobile
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration Successful');

    this.router.navigate(['/login']);

  }

}