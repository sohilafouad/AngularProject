import { Component, Input, OnChanges } from '@angular/core';
import { Iproduct } from '../../models/Iproduct';
import productList from '../../../assets/prouducLlist';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CurrencyPipe } from '@angular/common';
import { ExchangeRatePipe } from '../../pipes/exchange-rate.pipe';
import { OneprouctComponent } from '../oneprouct/oneprouct.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HighlightDirective,CurrencyPipe,ExchangeRatePipe,OneprouctComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {

  products: Iproduct[] = productList;
  @Input() filterValue: string = '';
  productsCart: any;


  ngOnChanges(): void {
    if (this.filterValue == '') {
      this.products = productList;
    } else {
      this.products = this.products.filter((product) =>
        product.name.includes(this.filterValue)
      );
    }
  }

  addToCart(newCartItem: Iproduct) {
    this.products.push(newCartItem);
  }
  handleBuy(product:Iproduct ) {
    if (product.quantity) product.quantity--;
  }

}
