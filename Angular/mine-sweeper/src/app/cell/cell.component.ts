import { Component, Input, OnInit, Output } from '@angular/core';
import { Cell } from '../models/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell = { isMine: false, covered: 'undiscovered' };
  
  ngOnInit(): void { }

  getClassForCell = (): string => {
    let classString = 'undiscovered';
    if (this.cell.covered === 'flagged') {
      classString = 'flagged';
    } else if (this.cell.covered === 'clicked' || this.cell.covered === 'discovered') {
      classString = this.cell.isMine ? 'explosion' : 'empty';
    } else {
      classString = 'undiscovered';
    } 
    return classString;
  }

  getElementForCell = (): string => {
    return this.cell.covered === 'undiscovered' 
    ? ' ' 
    : this.cell.covered === 'flagged'
      ? '📍'
      : this.cell.covered === 'clicked' && this.cell.isMine
        ? '💥'
        : this.cell.covered === 'clicked' && !this.cell.isMine
          ? this.getNumberOfBombsSurrounding()
          : this.cell.covered === 'discovered' && this.cell.isMine
            ? '💣'
            : '';
  }

  getNumberOfBombsSurrounding = () =>  {
    return this.cell.surroundingMines ? `${this.cell.surroundingMines}` : '';
  }
}
