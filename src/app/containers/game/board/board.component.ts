import { Component, OnInit } from '@angular/core';
import { Board } from '@classes/board';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private board: Board;

  constructor() { }

  ngOnInit() {
    this.board = new Board({
      tiles: 9
    });
  }
}
