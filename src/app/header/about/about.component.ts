import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { HomeComponent } from '../../home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule,HeaderComponent,HomeComponent,RouterLink,RouterLinkActive,RouterOutlet,],
  providers:[UserService]
})
export class AboutComponent { message: string = '';

  constructor(private sampleService: UserService) {}
  
  // ngOnInit(): void {
  //   this.message = this.sampleService.getmessage();
  // }
  getmessage(): void {
    this.message = this.sampleService.getmessage();
}
}