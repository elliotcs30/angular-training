import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';

  fontSize = 12;
  pFontSize = 15;
  fontSize2 = 20;
  empName = 'Elliot1';

  onSizeChange(size: number): void {
    this.fontSize = size;
  }

  onMyselfSizeChange(pSize: number): void {
    this.pFontSize = pSize;
  }
}
