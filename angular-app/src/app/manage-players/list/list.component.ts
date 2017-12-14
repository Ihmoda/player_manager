import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  player_list: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.retrieveTask();
    this._dataService.tasks.subscribe(
      (players) => this.player_list = players)
  }

  Delete(id: any){
    this._dataService.deleteProduct(id);
  }

}
