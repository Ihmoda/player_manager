import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductCreationComponent,
    ProductListEditComponent,
    RemoveproductComponent,
    ManagePlayersComponent,
    ManagePlayerStatusComponent,
    ListComponent,
    AddPlayerComponent,
    GameOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
