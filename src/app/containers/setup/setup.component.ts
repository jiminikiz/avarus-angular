import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html'
})
export class SetupComponent implements OnInit {
  steps = 5;
  onStep: number;

  selections = {
    difficulty: [
      {
        label: 'Goon',
        value: 1
      },
      {
        label: 'Criminal',
        value: 2
      },
      {
        label: 'Kingpin',
        value: 3
      }
    ]
  };

  onFirstStep = () => this.onStep === 1;
  onLastStep = () => this.onStep === this.steps;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.onStep = 1;
  }

  onNext() {
    this.onStep++;
  }

  onBack() {
    this.onStep--;
  }
}
