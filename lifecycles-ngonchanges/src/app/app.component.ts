import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  template: `
    <span class="price" [ngClass]="{increase: price > lastPrice, decrease: price < lastPrice }">
    {{ price }}
      <span>{{ firstChange ? '' : (price > lastPrice ? '↑' : '↓') }}</span>
  </span>
  `,
  styles: [
    `.price { background: black; color: white; }
     .increase { color: red; }
     .decrease { color: green; }
    `
  ]
})

export class PriceComponent implements OnInit, OnChanges {
  firstChange = true;
  lastPrice: any;
  @Input() price: any;

  ngOnInit() {
    console.log('Price Component Init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Price Component Input Changed');
    this.firstChange = changes['price'].firstChange;
    this.lastPrice = changes['price'].previousValue;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycles-ngonchanges';

  value = 100;
  increase() {
    this.value += 2;
  }

  decrease() {
    this.value -= 2;
  }
}
