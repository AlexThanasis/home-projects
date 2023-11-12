import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.css']
})
export class GameOptionsComponent {
  @Input() onStart!: Function;
  // width = 10;
  // height = 10;
  // mines = 5;

  // difficulties = [
  //   {level: 'easy', width: 10, height: 10, mines: 5},
  //   {level: 'medium', width: 25, height: 15, mines: 45},
  //   {level: 'hard', width: 35, height: 20, mines: 90},
  // ]

  // onSet = (index: number) => {
  //   console.log(this.difficulties[index]);
  //   this.width = this.difficulties[index].width;
  //   this.height = this.difficulties[index].height;
  //   this.mines = this.difficulties[index].mines;
  // }
}
