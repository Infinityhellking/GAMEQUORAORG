import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Dashboard/mainpage/navbar/navbar.component';
import { MainpageComponent } from './Dashboard/mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterOutlet,RouterLink,MainpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GameQuora';
}
