import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [`
    .settings-page {
      min-height: 100vh;
      background: #f7f8fa;
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    .settings-card {
      max-width: 800px;
      margin: auto;
      background: white;
      padding: 35px;
      border-radius: 28px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }

    .setting-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f7f8fa;
      padding: 18px;
      border-radius: 18px;
      margin: 15px 0;
    }

    button {
      border: none;
      background: #0aad0a;
      color: white;
      padding: 12px 18px;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
    }

    select {
      padding: 12px;
      border-radius: 12px;
      border: 1px solid #ddd;
    }
    
  `]
})
export class SettingsComponent {
  notifications = true;
  darkMode = false;
  language = 'English';

  toggleNotifications(): void {
    this.notifications = !this.notifications;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
  constructor(private router: Router) {}


}