import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent {
  private _size!: number;

  @Input()
  set size(size: string) {
    this._size = +size;
  };
  get size(): string {
    return this._size.toString();
  }
}
