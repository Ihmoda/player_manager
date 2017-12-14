import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})

export class ProductCreationComponent implements OnInit {
  product: Player = new Player;
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  createProduct(){
    console.log(this.product.name);
    this._dataService.addPlayer(this.product);
    console.log(this.product);
    this.product = new Player;
    this._router.navigateByUrl("products")
  }

}
