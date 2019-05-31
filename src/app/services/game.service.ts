import {Injectable} from '@angular/core';
import {Point} from '../models/point';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public counter = 0;
  public gameGrid: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];

  constructor() {
  }

  checkArrayNonEmptyCell(point: Point, player: string): boolean {
    if (this.gameGrid[point.horizontal][point.vertical] === '' && player === 'x') {
      this.gameGrid[point.horizontal][point.vertical] = 'x';
      return true;
    } else if (this.gameGrid[point.horizontal][point.vertical] === '' && player === 'y') {
      this.gameGrid[point.horizontal][point.vertical] = 'y';
      return true;
    } else {
      return false;
    }
  }

  checkWin(point: Point, player: string): boolean {
    this.counter = 0;

    // for top
    for (let i = 0; i < point.horizontal; i++) {
      this.counter++;
      if (this.gameGrid[i][point.vertical] !== player) {
        return false;
      }
    }

    // for bottom
    for (let j = point.horizontal; j < this.gameGrid.length; j++) {
      this.counter++;
      if (this.gameGrid[j][point.vertical] !== player) {
        return false;
      }
    }

    /*need to add check for 2 diagonals and left-right check!*/

    // for win
    if (this.counter === 3) {
      return true;
    }
  }
}
