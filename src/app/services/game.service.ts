import {Injectable} from '@angular/core';
import {Point} from '../models/point';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameGrid: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  private lastPoint: Point = null;
  private lastPlayer: string;

  constructor() {
  }

  putPointIfNotBusy(point: Point, player: string): boolean {
    if (this.gameGrid[point.horizontal][point.vertical] === '') {
      this.gameGrid[point.horizontal][point.vertical] = player;
      this.lastPoint = point;
      this.lastPlayer = player;
      return true;
    } else {
      return false;
    }
  }

  checkWin(): boolean {

    const vertical = this.checkVertical(this.lastPoint, this.lastPlayer);
    const horizontal = this.checkHorizontal(this.lastPoint, this.lastPlayer);
    const leftDiagonal = this.checkLeftDiagonal(this.lastPoint, this.lastPlayer);
    const rightDiagonal = this.checkRightDiagonal(this.lastPoint, this.lastPlayer);

    if (vertical || horizontal || leftDiagonal || rightDiagonal) {
      return true;
    }
  }

  checkVertical(point: Point, player: string): boolean {
    let topWin = true, bottomWin = true;

    for (let i = point.horizontal - 1; i >= 0; i--) {
      if (this.gameGrid[i][point.vertical] !== player) {
        topWin = false;
        break;
      }
    }

    for (let j = point.horizontal; j < this.gameGrid.length; j++) {
      if (this.gameGrid[j][point.vertical] !== player) {
        bottomWin = false;
        break;
      }
    }
    return topWin && bottomWin;
  }

  checkHorizontal(point: Point, player: string): boolean {
    let leftWin = true, rightWin = true;

    for (let i = point.vertical - 1; i >= 0; i--) {
      if (this.gameGrid[point.horizontal][i] !== player) {
        leftWin = false;
        break;
      }
    }

    for (let j = point.vertical; j < this.gameGrid[point.horizontal].length; j++) {
      if (this.gameGrid[point.horizontal][j] !== player) {
        rightWin = false;
        break;
      }
    }
    return leftWin && rightWin;
  }

  checkLeftDiagonal(point: Point, player: string): boolean {
    let topPartDiag = true, bottomPartDiag = true;

    for (let i = point.vertical - 1; i >= 0; i--) {
      if (this.gameGrid[i][i] !== player) {
        topPartDiag = false;
        break;
      }
    }

    for (let j = point.vertical; j < this.gameGrid.length; j++) {
      if (this.gameGrid[j][j] !== player) {
        bottomPartDiag = false;
        break;
      }
    }
    return topPartDiag && bottomPartDiag;
  }

  checkRightDiagonal(point: Point, player: string): boolean {
    let topPartDiag = true, bottomPartDiag = true;

    for (let i = point.horizontal, j = point.vertical; i >= 0; i--, j++) {
      if (this.gameGrid[i][j] !== player) {
        topPartDiag = false;
        break;
      }
    }

    for (let k = point.horizontal, l = point.vertical; k < this.gameGrid.length; k++, l--) {
      if (this.gameGrid[k][l] !== player) {
        bottomPartDiag = false;
        break;
      }
    }
    return topPartDiag && bottomPartDiag;
  }

  clearPlayField(): void {
    this.gameGrid = [['', '', ''], ['', '', ''], ['', '', '']];
  }
}
