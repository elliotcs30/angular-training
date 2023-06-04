import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-font-size4',
  templateUrl: './font-size4.component.html',
  styleUrls: ['./font-size4.component.css']
})
export class FontSize4Component {
  @Input() name!: string;
  @Output() nameChange = new EventEmitter<string>();

  fontSizeType = 'small';

  get fontClass(): string {
    return `${this.fontSizeType}-font`
  }
}
