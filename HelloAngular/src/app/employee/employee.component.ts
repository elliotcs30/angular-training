import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  name = 'Angular'

  purchaseCount = 10;
  unitPrice = 200;

  fontSize = 12;

  onSetFontSize(value: number): void {
    this.fontSize += value;
  }
}
