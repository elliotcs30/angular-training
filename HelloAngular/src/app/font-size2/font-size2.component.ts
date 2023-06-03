import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-size2',
  templateUrl: './font-size2.component.html',
  styleUrls: ['./font-size2.component.css']
})
export class FontSize2Component {
  @Input() size2!: number;
  @Output() size2Change = new EventEmitter<number>();

  onSetFontSize2(value: number): void {
    this.size2 += value;
    this.size2Change.emit(this.size2);
  }
}
