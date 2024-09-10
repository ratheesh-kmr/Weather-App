import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { WeatherComponent } from './weather/weather.component';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent,HomeComponent,FormsModule,CommonModule,RouterModule,RouterOutlet,RouterLink,RouterLinkActive],
  
})
export class AppComponent {
  title = 'weather-app';
  

}