import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent {
  @Input() toggleTimer: boolean = false;
  @Input() remainingMines!: number;
  @Input() gameState!: string;
}
