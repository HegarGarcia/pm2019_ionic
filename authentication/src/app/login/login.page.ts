import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  public user: string;
  public password: string;

  constructor(
    public modelController: ModalController,
    public alertController: AlertController
  ) {}

  public async login() {
    if (this.user === 'admin' && this.password === 'admin') {
      this.modelController.dismiss();
    } else {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Inicio de sesión',
        message: 'No se encontro este usuario',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
