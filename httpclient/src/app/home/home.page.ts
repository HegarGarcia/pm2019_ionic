import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public records: any[];

  constructor(public http: HttpClient) {}

  ngOnInit() {
    const uri = 'https://www.w3schools.com/angular/customers.php';

    this.http.get(uri).subscribe((data: any) => {
      this.records = data.records;
    });
  }
}
