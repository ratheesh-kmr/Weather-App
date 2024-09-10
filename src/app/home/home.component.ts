import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "../app.component";  // Import CommonModule
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, AppComponent,RouterOutlet,RouterLinkActive,RouterLink] // Include CommonModule here
  // Include CommonModule here
})
export class HomeComponent implements OnInit {
  weatherStats: any[] = [];

  ngOnInit(): void {
    // Mock data for demonstration
    this.weatherStats = [
      { date: new Date(2024, 7, 3), temperature: 30, description: 'Sunny' },
      { date: new Date(2024, 7, 4), temperature: 29, description: 'Partly cloudy' },
      { date: new Date(2024, 7, 5), temperature: 31, description: 'Sunny' }
    ];
  }
}
