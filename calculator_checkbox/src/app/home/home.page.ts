import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public result: string;
  public firstValue: string;
  public secondValue: string;
  public doAddition: boolean;
  public doSubstraction: boolean;

  constructor() {}

  public calculate() {
    if (!!this.firstValue && !!this.secondValue) {
      this.result = '';
      const firstValue = parseFloat(this.firstValue);
      const secondValue = parseFloat(this.secondValue);

      if (this.doAddition) {
        this.result += `${firstValue} + ${secondValue} = ${firstValue +
          secondValue}\n`;
      }

      if (this.doSubstraction) {
        this.result += `${firstValue} - ${secondValue} = ${firstValue -
          secondValue}`;
      }
    } else {
      this.result = 'Error in the data';
    }
  }
}
