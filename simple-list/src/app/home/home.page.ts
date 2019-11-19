import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public gameName: string;
  public gameList: string[] = [];

  constructor() {}

  public add() {
    if (this.gameName) {
      this.gameList.push(this.gameName);
      this.gameName = '';
    }
  }
}
