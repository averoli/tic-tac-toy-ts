export interface GameBoard {
  board: string[][];
    
}

export interface BoardProps {
  squares: string[][];
  currentValue: string;
  onPlay: (a: string[][], b: number, c: number) => void;
}

export interface SquareProps {
  value: string;
  column: number;
  row: number;
  onAddValue: () => void;
}
