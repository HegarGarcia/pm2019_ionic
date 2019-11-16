import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public firstValue: string;
  public secondValue: string;
  public result: string;
  public operation: string;

  constructor() {}

  public calculate() {
    if (this.firstValue && this.secondValue) {
      const firstValue = parseFloat(this.firstValue);
      const secondValue = parseFloat(this.secondValue);

      switch (this.operation) {
        case 'addition':
          this.result = `${firstValue} + ${secondValue} = ${firstValue +
            secondValue}`;
          break;
        case 'substraction':
          this.result = `${firstValue} - ${secondValue} = ${firstValue -
            secondValue}`;
          break;
        case 'multiplication':
          this.result = `${firstValue} x ${secondValue} = ${firstValue *
            secondValue}`;
          break;
        default:
          this.result = 'Error!';
          break;
      }
    }
  }
}
