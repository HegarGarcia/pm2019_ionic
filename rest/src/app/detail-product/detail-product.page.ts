import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController, AlertController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-detail-product",
  templateUrl: "./detail-product.page.html",
  styleUrls: ["./detail-product.page.scss"]
})
export class DetailProductPage {
  public respuesta: any;
  public item: any;

  constructor(
    public navParams: NavParams,
    public http: HttpClient,
    public modalController: ModalController,
    public alertController: AlertController
  ) {
    this.item = navParams.get("item");
  }

  updateProduct(item) {
    const uri =
      "https://aplicacionesmovilesx.000webhostapp.com/ionic/api.php?comando=editar&nombre=" +
      item.nombre +
      "&descripcion=" +
      item.descripcion +
      "&preciodecosto=" +
      item.preciodecosto +
      "&preciodeventa=" +
      item.preciodeventa +
      "&cantidad=" +
      item.cantidad +
      "&fotografia=" +
      item.fotografia +
      "&id=" +
      item.id;

    this.http.get(uri).subscribe(async data => {
      this.respuesta = data;
      const mensaje = this.respuesta.mensaje;
      if (!!mensaje) {
        {
          const alert = await this.alertController.create({
            header: "Alerta",
            subHeader: "Actualizar",
            message: mensaje,
            buttons: ["OK"]
          });
          await alert.present();
          this.modalController.dismiss();
        }
      }
    });
  }

  deleteProduct(id) {
    const uri = `https://aplicacionesmovilesx.000webhostapp.com/ionic/api.php?comando=eliminar&id=${id}`;

    this.http.get(uri).subscribe(async (data: any) => {
      const mensaje = data.mensaje;
      if (!!mensaje) {
        {
          const alert = await this.alertController.create({
            header: "Alerta",
            subHeader: "Eliminar",
            message: mensaje,
            buttons: ["OK"]
          });
          await alert.present();
          this.modalController.dismiss();
        }
      }
    });
  }

  goBack() {
    this.modalController.dismiss();
  }
}
