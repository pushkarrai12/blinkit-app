
import { Component } from '@angular/core';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styles: [`
    .help-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .help-hero {
      background: linear-gradient(135deg, #e8ffe8, #fff6cf);
      padding: 45px;
      border-radius: 28px;
      margin-bottom: 30px;
    }

    .help-hero h1 {
      margin: 0;
      font-size: 42px;
    }

    .help-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .faq-box,
    .contact-box {
      background: white;
      padding: 30px;
      border-radius: 24px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    }

    .faq-item {
      background: #f7f8fa;
      padding: 18px;
      border-radius: 16px;
      margin-bottom: 14px;
    }

    .faq-item h3 {
      margin: 0 0 8px;
    }

    .contact-box input,
    .contact-box textarea {
      width: 100%;
      padding: 14px;
      border-radius: 12px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      box-sizing: border-box;
    }

    .contact-box button {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 14px;
      background: #0aad0a;
      color: white;
      font-weight: 800;
      cursor: pointer;
    }

    @media(max-width: 900px) {
      .help-grid {
        grid-template-columns: 1fr;
      }

      .help-page {
        padding: 20px;
      }
    }
  `]
})
export class HelpSupportComponent {
  name = '';
  message = '';

  sendMessage(): void {
    if (!this.name || !this.message) {
      alert('Please fill all details');
      return;
    }

    alert('Support request submitted');
    this.name = '';
    this.message = '';
  }
}
