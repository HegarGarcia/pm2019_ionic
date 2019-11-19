import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { DetailProductPage } from '../detail-product/detail-product.page';
import { AddProductPage } from '../add-product/add-product.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public backButtonSubscription;
  public records: any[] = [];
  public total = 0;

  constructor(
    public http: HttpClient,
    public modalController: ModalController
  ) {
    this.loadProducts();
  }

  private loadProducts() {
    const uri =
      'https://aplicacionesmovilesx.000webhostapp.com/ionic/api.php?comando=listar';

    this.http.get(uri).subscribe(data => {
      const datos: any = data;
      this.records = datos.records;
      this.total = this.records.length;
    });
  }
  async editProduct(item) {
    const modal = await this.modalController.create({
      component: DetailProductPage,
      componentProps: { item }
    });
    modal.onDidDismiss().then(() => {
      this.loadProducts();
    });
    return await modal.present();
  }

  async addProduct() {
    const modal = await this.modalController.create({
      component: AddProductPage
    });

    modal.onDidDismiss().then(() => {
      this.loadProducts();
    });

    return await modal.present();
  }

  salir() {
    // navigator.app.exitApp();
  }
}
