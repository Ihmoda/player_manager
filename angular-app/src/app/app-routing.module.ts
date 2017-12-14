import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductListEditComponent } from './product-list-edit/product-list-edit.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';

import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManagePlayerStatusComponent } from './manage-player-status/manage-player-status.component';
import { ListComponent } from './manage-players/list/list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { GameOneComponent } from './manage-player-status/game-one/game-one.component';

const routes: Routes = [
  {
    path: "players",
    component: ManagePlayersComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
        pathMatch: 'full'
      },
      {
        path: 'addplayer',
        component: AddPlayerComponent,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: "status",
    component: ManagePlayerStatusComponent,
    children: [
      {
        path: 'game/:id',
        component: GameOneComponent,
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
