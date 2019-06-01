import {Injectable} from '@angular/core';
import {Point} from '../models/point';

@Injectable({
  providedIn: 'root'
})
export class GameService {
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

    const vertical = this.checkVertical(point, player);
    const horizontal = this.checkHorizontal(point, player);
    const leftDiagonal = this.checkLeftDiagonal(point, player);
    const rightDiagonal = this.checkRightDiagonal(point, player);

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

    for (let k = point.horizontal + 1, l = point.vertical; k < this.gameGrid.length; k++, l--) {
      if (this.gameGrid[k][l] !== player) {
        bottomPartDiag = false;
        break;
      }
    }
    return topPartDiag && bottomPartDiag;
  }
}
