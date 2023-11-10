import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/cell';
import { GameService } from '../game-service.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  mines: number = 5;
  gameBoard: Cell[][] = [];
  gameState!: 'not-started' | 'started' | 'lost' | 'won';
  points: number = 0;
  flags: number = 0;
  
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameState = 'not-started';
  }

  onStart = (width: number, height: number, mines: number): void => {
    this.mines = mines;
    this.gameBoard = this.gameService.createGame(this.mines, { width: width, height: height });
    this.gameService.creatingNumbersForEmptyCell(this.gameBoard);
    this.gameState = 'started';
  }

  onRestart = () => {
    this.gameState = 'not-started';
    this.mines = 5;
    this.flags = 0;
  }

  onClick = (cell: Cell, rowIndex: number, colIndex: number): void => {
    if (cell.covered === 'clicked' || cell.covered === 'discovered' || cell.covered === 'flagged' || this.gameState === 'won' || this.gameState === 'lost') {
      return;
    }
    cell.covered = 'clicked';
    this.checkSurroundingEmptyCells(rowIndex, colIndex);
    
    if (cell.isMine || this.isGameWon()) {
      this.setGameFinished(this.isGameWon() ?? false);
    }
  }

  onContextmenu = (event: any, cell: Cell): void => {
    event?.preventDefault();
    
    if (cell.covered === 'undiscovered') {
      cell.covered = 'flagged';
      this.flags++;
      if (this.isGameWon()) {
        this.setGameFinished(true);
      }
      return;
    }

    if (cell.covered === 'flagged') {
      cell.covered = 'undiscovered';
      this.flags--;
      return;
    }
  }

  isGameWon = (): boolean => {
    return this.flags === this.mines && this.gameBoard.flat().filter((cell: Cell) => cell.covered === 'flagged').every((cell: Cell) => cell.isMine);
  }

  setGameFinished = (hasWon: boolean = true): void => {
    this.gameState = hasWon ? 'won' : 'lost';
    this.gameBoard.flat().filter((cell: Cell) => cell.covered === 'undiscovered').map((cell: Cell) => cell.covered = 'discovered');
  }

  checkSurroundingEmptyCells = (rowIndex: number, colIndex: number): void => {
    // const directions = [[-1, 0], [1, 0]];
    
    if (rowIndex - 1 >= 0 && this.gameBoard[rowIndex - 1][colIndex].covered !== 'flagged' && this.gameBoard[rowIndex - 1][colIndex].covered !== 'clicked' && this.gameBoard[rowIndex - 1][colIndex].covered !== 'discovered' && !this.gameBoard[rowIndex - 1][colIndex].isMine && this.gameBoard[rowIndex - 1][colIndex].surroundingMines === 0) {
      this.gameBoard[rowIndex - 1][colIndex].covered = 'discovered';
      this.checkSurroundingEmptyCells(rowIndex - 1, colIndex);
    }
    if (rowIndex + 1 < this.gameBoard.length && this.gameBoard[rowIndex + 1][colIndex].covered !== 'flagged' && this.gameBoard[rowIndex + 1][colIndex].covered !== 'clicked' && this.gameBoard[rowIndex + 1][colIndex].covered !== 'discovered' && !this.gameBoard[rowIndex + 1][colIndex].isMine && this.gameBoard[rowIndex + 1][colIndex].surroundingMines === 0) {
      this.gameBoard[rowIndex + 1][colIndex].covered = 'discovered';
      this.checkSurroundingEmptyCells(rowIndex + 1, colIndex);
    }

    if (colIndex - 1 >= 0 && this.gameBoard[rowIndex][colIndex - 1].covered !== 'flagged' && this.gameBoard[rowIndex][colIndex - 1].covered !== 'clicked' && this.gameBoard[rowIndex][colIndex - 1].covered !== 'discovered' && !this.gameBoard[rowIndex][colIndex - 1].isMine && this.gameBoard[rowIndex][colIndex - 1].surroundingMines === 0) {
      this.gameBoard[rowIndex][colIndex - 1].covered = 'discovered';
      this.checkSurroundingEmptyCells(rowIndex, colIndex - 1);
    }

    if (colIndex + 1 < this.gameBoard[rowIndex].length && this.gameBoard[rowIndex][colIndex + 1].covered !== 'flagged' && this.gameBoard[rowIndex][colIndex + 1].covered !== 'clicked' && this.gameBoard[rowIndex][colIndex + 1].covered !== 'discovered' && !this.gameBoard[rowIndex][colIndex + 1].isMine && this.gameBoard[rowIndex][colIndex + 1].surroundingMines === 0) {
      this.gameBoard[rowIndex][colIndex + 1].covered = 'discovered';
      this.checkSurroundingEmptyCells(rowIndex, colIndex + 1);
    }
  }
}
