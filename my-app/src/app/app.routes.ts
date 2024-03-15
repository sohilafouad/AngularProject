import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'contactus', component: ContactusComponent, title: 'Contact us' },
    { path: 'aboutus', component: AboutusComponent, title: 'About us' },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'profile', component: ProfileComponent, title: 'Profile' },
    { path: 'product/:id', component: ProductDetailsComponent, title: 'Product' },
    { path: 'cart', component: ShoppingcartComponent, title: 'shoppingcart'},
  
  ];
