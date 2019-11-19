import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public name: string;
  public id: number;

  constructor(private router: Router) {
    this.name = this.router.getCurrentNavigation().extras.state.nombre;
    this.id = this.router.getCurrentNavigation().extras.state.id;
  }
}
