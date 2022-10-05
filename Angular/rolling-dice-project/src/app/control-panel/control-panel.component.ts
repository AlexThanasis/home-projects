import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  sidesOfDice = 6;
  dices: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRoll(rollOfDices: string) {
    this.dices = [];
    for (let index = 0; index < +rollOfDices; index++) {
      const element = this.getRandomInt();
      this.dices.push(element);
    }
  }

  getRandomInt() {
    return Math.floor(Math.random() * this.sidesOfDice) + 1;
  }
}
