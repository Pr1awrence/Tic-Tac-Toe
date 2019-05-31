import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Point} from '../../models/point';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {
  message = 'Player X';

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

  cellClickHandler(point: Point): void {
  }
}
