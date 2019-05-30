import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayFieldComponent } from './components/play-field/play-field.component';
import { GameCellComponent } from './components/game-cell/game-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayFieldComponent,
    GameCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
