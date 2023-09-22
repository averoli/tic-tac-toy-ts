export type squareValue = "X" | "0" | null;

export interface Move {
  id: number;
  indexR: number;
  indexC: number;
}

export interface GameBoard {
  board: squareValue[][];
  
}

export interface BoardProps {
  squares: squareValue[][];
  currentValue: squareValue;
  onPlay: (a: squareValue[][], b: number, c: number) => void;
}

export interface SquareProps {
  value: squareValue;
  column: number;
  row: number;
  isWinnerSquare: boolean;
  onAddValue: () => void;
}

export interface GameInfoProps {
  moves: Move[];
}
