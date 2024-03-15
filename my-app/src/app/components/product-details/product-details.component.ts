import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Iproduct } from '../../models/Iproduct';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
goToHome() {
  this.Router.navigate(['/home']); 
}

  product!: Iproduct  | undefined;
  isLastIndex: boolean = false;
isFirstIndex:boolean=false;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private Router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const paramId = param.get('id');
      const id = paramId ? +paramId : undefined;
      this.product = this.productsService.getProductById(id);

      this.isLastIndex = this.productsService.isLastIndex(id);
    });
   
  }
  goNext(id: number) {
    const nextId = this.productsService.getNextProductId(id);
    this.Router.navigate(['/product', nextId]);
  }
  goPrevious(id: number) {
    
    const previousId = this.productsService.getPreviousProductId(id);
    
    this.Router.navigate(['/product', previousId]);
}


} 


