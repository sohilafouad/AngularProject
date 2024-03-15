import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeRate',
  standalone: true
})
export class ExchangeRatePipe implements PipeTransform {

  currencies: any = {
    EGP: 40,
    
  };
  transform(value: number, currency: string): number {
    return value * (this.currencies[currency] || 2);//value=price//price*40
  }

}
