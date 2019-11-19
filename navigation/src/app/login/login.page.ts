import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  public id: number;
  public name: string;
  constructor(public navCtrl: NavController) {}

  public goToHome() {
    this.navCtrl.navigateForward('/home', {
      state: { name: this.name, id: this.id }
    });
  }
}
