import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Point} from '../../models/point';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {
  player = 'x';
  win = false;
  gameDraw = false;
  messageError = '';
  cellFilled = 0;

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

  cellClickHandler(point: Point): void {
    if (!this.win) {
      const statusCell = this.gameService.putPointIfNotBusy(point, this.player);
      if (!statusCell) {
        this.messageError = 'This cell is already taken';
      }
      this.win = this.gameService.checkWin();

      if (statusCell) {
        this.cellFilled++;
        this.messageError = '';
        if (this.player === 'x' && !this.win) {
          this.player = 'o';
        } else if (this.player === 'o' && !this.win) {
          this.player = 'x';
        }
      }
      if (this.cellFilled === 9 && !this.win) {
        this.gameDraw = true;
      }
    }
  }

  resetGame(): void {
    this.gameService.clearPlayField();
    this.player = 'x';
    this.win = false;
    this.gameDraw = false;
    this.messageError = '';
    this.cellFilled = 0;
  }
}
