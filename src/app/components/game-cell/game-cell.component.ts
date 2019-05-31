import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Point} from '../../models/point';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.css']
})
export class GameCellComponent implements OnInit {
  @Input() vertical: number;
  @Input() horizontal: number;
  @Input() element: string;
  @Output() provideCoordinates: EventEmitter<Point> =  new EventEmitter();
  constructor() { }

  ngOnInit() {}

  clickCell(): void {
    const point = new Point();
    point.horizontal = this.horizontal;
    point.vertical = this.vertical;
    this.provideCoordinates.emit(point);
  }
}
