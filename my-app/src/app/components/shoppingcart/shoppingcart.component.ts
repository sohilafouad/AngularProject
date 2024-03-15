import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/Iproduct';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  imports: [],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent implements OnInit {
  productsCart: Iproduct[] = [];

  constructor(private cartService: CartService) {
    this.productsCart = this.cartService.getCartItems();
  }

  ngOnInit(): void {}
}
