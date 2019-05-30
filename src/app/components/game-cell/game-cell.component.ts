import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.css']
})
export class GameCellComponent implements OnInit {
  @Input() vertical: number;
  @Input() horizontal: number;
  constructor() { }

  ngOnInit() {
  }

}
