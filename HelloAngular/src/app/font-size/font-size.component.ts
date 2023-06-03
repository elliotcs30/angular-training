import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent {
  @Input() size!: number;
  @Input() pSize!: number;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() subSizeChange = new EventEmitter<number>();

  onSetFontSize(value: number): void {
    this.size += value;
    this.sizeChange.emit(this.size);
  }

  onSetSubFontSize(value: number): void {
    this.pSize += value;
    this.subSizeChange.emit(this.pSize);
  }
}
