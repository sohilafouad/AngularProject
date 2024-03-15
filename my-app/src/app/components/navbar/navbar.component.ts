import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  routes = [
    { path: 'home', title: 'Home' },
    { path: 'aboutus', title: 'About us' },
    { path: 'contactus', title: 'Contact us' },
    { path: 'profile', title: 'Profile' },
    { path: 'cart', title: 'Shopping Cart' },
    { path: 'login', title: 'Login' },
  
  ];
}
