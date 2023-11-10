export interface Cell {
    covered: 'undiscovered' | 'clicked' | 'flagged' | 'discovered';
    surroundingMines?: number;
    isMine: boolean;
}
