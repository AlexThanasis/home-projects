import { Injectable } from '@angular/core';
import { Cell } from './models/cell';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  createGame = (mines: number, size: { width : number, height: number }): Cell[][] => {
    // creating gameboard, creating mines, creating empty cells, concatenating them and shuffle them
    return Array(mines)
      .fill(undefined)
      .map(u => {return { isMine: true, covered: 'undiscovered' };})
      .concat(Array(size.width * size.height - mines)
      .fill(undefined)
      .map(_ => {return { isMine: false, covered: 'undiscovered' };}))
      .sort(() => Math.random() - 0.5)
      .reduce((rows: any, key: any, i: number) => (i % size.width === 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
  }

  creatingNumbersForEmptyCell = (gameBoard: Cell[][]): Cell[][] => {
    gameBoard.forEach((row, rowIndex) => row.forEach((cell, colIndex) => {
      if (!cell.isMine) {
          const surroundingCellsTemp = [
            rowIndex - 1 >= 0 && colIndex - 1 >= 0 && gameBoard[rowIndex - 1][colIndex - 1]?.isMine,
            rowIndex - 1 >= 0 && gameBoard[rowIndex - 1][colIndex]?.isMine, 
            rowIndex - 1 >= 0 && colIndex < row.length && gameBoard[rowIndex - 1][colIndex + 1]?.isMine, 
            colIndex - 1 >= 0 && gameBoard[rowIndex][colIndex - 1]?.isMine, 
            colIndex < row.length &&  gameBoard[rowIndex][colIndex + 1]?.isMine, 
            rowIndex < gameBoard.length - 1 && colIndex - 1 >= 0 && gameBoard[rowIndex + 1][colIndex - 1]?.isMine, 
            rowIndex < gameBoard.length - 1 && gameBoard[rowIndex + 1][colIndex]?.isMine,
            rowIndex < gameBoard.length - 1 && colIndex < row.length && gameBoard[rowIndex + 1][colIndex + 1]?.isMine
          ].filter(isMine => isMine).length;
        cell.surroundingMines = surroundingCellsTemp;
      }
    }
    ))
    return gameBoard;
  }
}
