import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-screen',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainScreenComponent implements OnInit {
  constructor() { }

  title = 'Avarus';

  ngOnInit() {
  }
}
