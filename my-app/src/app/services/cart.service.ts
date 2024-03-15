import { Injectable } from '@angular/core';
import { Iproduct } from '../models/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Iproduct[] = [];
  constructor() {}

  getCartItems() {
    return this.cartItems;
  }
  addToCart(product: Iproduct) {
    this.cartItems.push(product);
  }
  removeFromCart(id: number) {
    this.cartItems.filter((cartItem) => cartItem.id != id);
  }
}
