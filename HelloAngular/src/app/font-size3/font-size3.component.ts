import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-font-size3',
  templateUrl: './font-size3.component.html',
  styleUrls: ['./font-size3.component.css']
})
export class FontSize3Component {
  @Input() size3 = 15;

  onSetFontSize3(value: number): void {
    this.size3 += value;
  }
}
