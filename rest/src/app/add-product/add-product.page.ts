import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.page.html",
  styleUrls: ["./add-product.page.scss"]
})
export class AddProductPage {
  public name: string;
  public description: string;
  public amount: number;
  public price: number;
  public cost: number;
  public url: string;
  public response: any;

  constructor(
    public http: HttpClient,
    public modalController: ModalController
  ) {}

  saveProduct() {
    const uri = `https://aplicacionesmovilesx.000webhostapp.com/ionic/api.php?comando=agregar&nombre=${this.name}&descripcion=${this.description}&preciodecosto=${this.cost}&preciodeventa=${this.price}&cantidad=${this.amount}&fotografia=${this.url}`;
    this.http.get(uri).subscribe((data: any) => {
      const mensaje = data.mensaje;
      if (!!mensaje) {
        {
          this.modalController.dismiss();
        }
      }
    });
  }

  cancel() {
    this.modalController.dismiss();
  }
}
