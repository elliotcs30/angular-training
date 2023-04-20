import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The produce has been shared!')
  }

  name = 'Angular';

  purchaseCount = 10;
  unitPrice = 200;

  // event binding
  fontSize = 12;

  onSetFontSize(value: number): void {
    this.fontSize += value;
  }

  // style binding
  fontColor = 'red';

  // class binding
  fontSizeType = 'small';
  get fontClass(): string {
    return `${this.fontSizeType}-font`;
  }
}
