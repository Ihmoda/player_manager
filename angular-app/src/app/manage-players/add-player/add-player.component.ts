import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {
  new_player = new Player();
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  addPlayer(){
    this.new_player.game_1 = null;
    this.new_player.game_2 = null;
    this.new_player.game_3 = null;
    this._dataService.addPlayer(this.new_player);
    this.new_player = new Player();
    this._router.navigateByUrl('players/list')
    console.log("test");
  }

}
