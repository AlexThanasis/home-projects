import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dice-panel',
  templateUrl: './dice-panel.component.html',
  styleUrls: ['./dice-panel.component.css']
})
export class DicePanelComponent implements OnInit {
  @Input() dices: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
