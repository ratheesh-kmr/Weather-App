// header.component.ts

import { Component, HostBinding } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports :[HomeComponent,AppComponent,HeaderComponent,RouterLink,RouterLink,RouterOutlet,FormsModule,CommonModule]
})
export class HeaderComponent {
  showContactForm = false;

  closeContactForm() {
    this.showContactForm = false;
  }
  
  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      // Here you can handle the form submission (e.g., send the data to a server)
      form.reset(); // Reset the form after submission
      this.showContactForm = false; // Optionally hide the form after submission
    }
  }
}
  
