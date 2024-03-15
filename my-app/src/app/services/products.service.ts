import { Injectable } from '@angular/core';

import productList from '../../assets/prouducLlist';
import { Iproduct } from '../models/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproduct[];
  constructor() {
    this.products = productList;
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(id: number | undefined): Iproduct | undefined {
    if (!id) return undefined;
    const product = this.products.find((product) => product.id == id);
    if (product) return product;
    return;
  }

  getProductsByCategoryId(categoryId: number): Iproduct[] {
    return this.products.filter((product) => product.categoryID == categoryId);
  }


  getFilteredProductsName(searchValue: string): Iproduct[] {
    if (!searchValue) return this.products;
    return this.products.filter((product) =>
      product.name.includes(searchValue)
    );
  }
  isLastIndex(id: number | undefined) {
    if (!id) return false;

    const findedProduct = this.products[this.products.length - 1];
    return findedProduct.id == id;
  }
  getNextProductId(currentId: number | undefined): number {
    let index = this.products.findIndex((product) => product.id == currentId);

    const findedProduct = this.products[++index];

    return findedProduct.id;
  }
  isFirstIndex(id: number | undefined): boolean {
    if (!id) return false; 

    const firstProduct = this.products[0]; 
    return firstProduct.id === id; 
}


  getPreviousProductId(currentId: number | undefined): number | undefined {
    const index = this.products.findIndex((product) => product.id === currentId);

   
    if (index <= 0) {
        return undefined;
    }

    const previousProduct = this.products[index - 1];
    return previousProduct.id;
}

}
