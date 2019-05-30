import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {
  message = 'Player X';
  constructor() { }

  ngOnInit() {
  }

}
