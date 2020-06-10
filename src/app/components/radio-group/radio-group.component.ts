import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface RadioButton {
  id?: string;
  label: string;
  value: any;
}

@Component({
  selector: 'input-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  private selected: RadioButton;

  @Input() classes: string[];
  @Input() radios: RadioButton[];

  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selected = this.radios[0];
  }

  onClick(emitted) {
    this.selected = this.radios[emitted.index];
    this.select.emit(emitted);
  }
}
