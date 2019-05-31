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
  messageError = '';

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

  cellClickHandler(point: Point): void {
    if (!this.win) {
      const statusCell = this.gameService.checkArrayNonEmptyCell(point, this.player);
      if (!statusCell) {
        this.messageError = 'This cell is already taken';
      }
      this.win = this.gameService.checkWin(point, this.player);

      if (statusCell) {
        this.messageError = '';
        if (this.player === 'x' && !this.win) {
          this.player = 'y';
        } else if (this.player === 'y' && !this.win) {
          this.player = 'x';
        }
      }
    }
  }
}
