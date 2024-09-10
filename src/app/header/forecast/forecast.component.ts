import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../header.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    HomeComponent,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnChanges {
  searchText: string = '';
  filteredCities: string[] = [];
  selectedCity: string = '';
  weatherData: WeatherData | null = null;
  errorMessage: string = '';

  cities: string[] = [
    'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem',
    'Bengaluru', 'Hyderabad', 'Kochi', 'Kolkata', 'Mumbai', 
    'Delhi', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur'
  ];

  onSearchChange() {
    this.filteredCities = this.cities.filter(city =>
      city.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.searchText = city;
    this.filteredCities = [];
    this.searchWeather(); // Automatically fetch weather when a city is selected
  }

  searchWeather() {
    console.log(`Searching weather for ${this.selectedCity}`);
    this.fetchWeather(this.selectedCity);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCity'] && this.selectedCity) {
      this.fetchWeather(this.selectedCity);
    }
  }
  clearSearch() {
    this.searchText = '';
    this.filteredCities = [];
    this.weatherData = null; // Optionally clear weather data as well
    this.errorMessage = ''; // Optionally clear any error messages
  }

  fetchWeather(city: string): void {
    console.log(`Fetching weather for ${city}`);
    
    const predefinedWeatherData: Record<string, WeatherData> = {
      'Chennai': { temperature: '32°C', high: '35°C', low: '29°C', description: 'Sunny' },
      'Coimbatore': { temperature: '28°C', high: '30°C', low: '25°C', description: 'Partly cloudy' },
      'Madurai': { temperature: '34°C', high: '37°C', low: '31°C', description: 'Hot' },
      'Tiruchirappalli': { temperature: '33°C', high: '36°C', low: '30°C', description: 'Sunny' },
      'Salem': { temperature: '31°C', high: '34°C', low: '28°C', description: 'Cloudy' },
      'Bengaluru': { temperature: '27°C', high: '29°C', low: '24°C', description: 'Mild' },
      'Hyderabad': { temperature: '30°C', high: '32°C', low: '26°C', description: 'Warm' },
      'Kochi': { temperature: '29°C', high: '31°C', low: '27°C', description: 'Humid' },
      'Kolkata': { temperature: '31°C', high: '33°C', low: '28°C', description: 'Hot' },
      'Mumbai': { temperature: '30°C', high: '32°C', low: '26°C', description: 'Moderate' },
      'Delhi': { temperature: '35°C', high: '37°C', low: '30°C', description: 'Hot' },
      'Pune': { temperature: '28°C', high: '30°C', low: '24°C', description: 'Pleasant' },
      'Jaipur': { temperature: '36°C', high: '38°C', low: '32°C', description: 'Very Hot' },
      'Lucknow': { temperature: '34°C', high: '36°C', low: '29°C', description: 'Hot' },
      'Kanpur': { temperature: '33°C', high: '35°C', low: '28°C', description: 'Hot' }
    };
    

    if (predefinedWeatherData[city]) {
      this.weatherData = predefinedWeatherData[city];
      this.errorMessage = ''; // Clear error message if data is found
    } else {
      this.weatherData = null;
      this.errorMessage = 'City not found'; // Set error message if data is not found
    }
  }
}

interface WeatherData {
  temperature: string;
  high: string;
  low: string;
  description: string;
}
