import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'discount', standalone: true, pure: true })
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercent: number): number {
    return price - (price * discountPercent / 100);
  }
}
