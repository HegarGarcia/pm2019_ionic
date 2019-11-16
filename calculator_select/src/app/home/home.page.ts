import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public result: string;
  public firstValue: string;
  public secondaValue: string;
  public operation: string;

  constructor() {}

  public calculate() {
    if (this.firstValue && this.secondaValue) {
      const firstValue = parseFloat(this.firstValue);
      const secondaValue = parseFloat(this.secondaValue);

      switch (this.operation) {
        case 'addition':
          this.result = `${firstValue} + ${secondaValue} = ${firstValue +
            secondaValue}`;
          break;
        case 'substraction':
          this.result = `${firstValue} - ${secondaValue} = ${firstValue -
            secondaValue}`;
          break;
        case 'multiplication':
          this.result = `${firstValue} x ${secondaValue} = ${firstValue *
            secondaValue}`;
          break;
        default:
          this.result = 'Error!';
          break;
      }
    }
  }
}
