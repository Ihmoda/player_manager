import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Player } from '../../player';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  player_list: any[];
  game_num: number;
  constructor(private _route: ActivatedRoute, private _dataService: DataService, private _router: Router) {
    this._route.paramMap.subscribe( params => {
      this.game_num = Number(params.get('id'));
      console.log(this.game_num);
 })        
  }
 
ngOnInit() {
  this._dataService.retrieveTask();
  this._dataService.tasks.subscribe(
    (players) => this.player_list = players)
}

playing(id,check, player2){
  var game = "game_" + this.game_num
  switch (check){
    case "playing":
      player2[game] = true;
      break;
    case "notplaying":
      player2[game] = false;
      break;
    case "undecided":
      player2[game] = null;
      break;
  }
  this._dataService.updateProduct(player2);
}

}
