import { Component, Input, OnInit } from '@angular/core';
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
    } else if (this.cell.covered === 'discovered' && !this.cell.isMine) {
      classString = `discovered${this.cell.surroundingMines ? '-' + this.cell.surroundingMines : ''}`;

    } else if (this.cell.isClicked && this.cell.isMine) {
      classString = 'explosion';
    }
    return classString;
  }

  getElementForCell = (): string => {
    return this.cell.covered === 'flagged'
      ? '📍'
      : this.cell.isClicked && this.cell.isMine
        ? '💥'
        : (this.cell.isClicked || this.cell.covered === 'discovered') && !this.cell.isMine
          ? this.getNumberOfBombsSurrounding()
          : this.cell.covered === 'discovered' && this.cell.isMine
            ? '💣'
            : ' ';
  }

  getNumberOfBombsSurrounding = () =>  {
    return this.cell.surroundingMines ? `${this.cell.surroundingMines}` : '';
  }
}
