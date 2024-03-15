import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { ExchangeRatePipe } from '../../pipes/exchange-rate.pipe';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { Iproduct } from '../../models/Iproduct';
import productList from '../../../assets/prouducLlist';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-oneprouct',
    standalone: true,
    imports: [ HighlightDirective,CurrencyPipe,ExchangeRatePipe,],
    templateUrl: './oneprouct.component.html',
    styleUrls: ['./oneprouct.component.css'], // Corrected styleUrls property

   
})
export class OneprouctComponent {
    @Input() product!: Iproduct;
    @Input() isChair!: boolean;
    @Input() searchValue: string = '';
    @Output() handleAddToCart = new EventEmitter<Iproduct>();

    products: Iproduct[] = productList;

    constructor(private router: Router, private cartService: CartService) {}

    addProductToCart(event: MouseEvent, product: Iproduct) {
        event.stopPropagation();
        this.cartService.addToCart(product);
        if (product.quantity) product.quantity--;
    }

    handleBuy(product: Iproduct) {
        if (product.quantity) product.quantity--;
    }

    handleRoute(id: number) {
        this.router.navigate(['/product', id]);
    }
}
