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

  constructor() {}

  private add() {
    if (!!this.firstValue && !!this.secondValue) {
      this.result = (
        parseFloat(this.firstValue) + parseFloat(this.secondValue)
      ).toString();
    }
  }
}
