import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-font-size4',
  templateUrl: './font-size4.component.html',
  styleUrls: ['./font-size4.component.css']
})
export class FontSize4Component {
  fontSizeType = 'small';

  get fontClass(): string {
    return `${this.fontSizeType}-font`
  }
}
