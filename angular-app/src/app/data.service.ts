import { Injectable } from '@angular/core';
import { Player } from './player'
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  
  constructor(private _http: HttpClient) {
  }

  retrieveTask() {
    this._http.get('http://localhost:8000/players').subscribe(
      (data: any[]) => { this.tasks.next(data)}
    )
  }

  addPlayer(new_player: any) {
    console.log("hit add task");
    this._http.post('http://localhost:8000/add', new_player).subscribe(
      (data: any[]) => { this.tasks.next(data) }
    )
  }

  deleteProduct(id: any) {
    console.log('Inside DataService : ', id);
    this._http.delete('http://localhost:8000/players/' + id).subscribe(
      (data: any[]) => { this.tasks.next(data) }
    )
  }

  retrieveProduct(id: string) {
    this._http.get('http://localhost:8000/players/'+id).subscribe(
      (data: any[]) => { this.tasks.next(data)}
    )
  }

  updateProduct(player: any){
    this._http.put('http://localhost:8000/players/'+ player._id, player).subscribe(
      (data: any[]) => { this.tasks.next(data)}
    )
  }

  //this._http.get('http://localhost:8000/tasks').subscribe( /*...*/ );
  //this._http.post('http://localhost:8000/tasks', task).subscribe( /*...*/ );
  
}
