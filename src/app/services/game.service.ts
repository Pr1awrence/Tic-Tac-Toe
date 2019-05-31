import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameGrid: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  constructor() {
  }

  checkArrayNonEmptyCell(h,v): void {
  }
}
