import { useState, useEffect } from "react";
import Square from "../square/square";
import { BoardProps, squareValue } from "../../../types";
import "./board.scss";

const Board = ({ squares, currentValue, onPlay }: BoardProps) => {
  const [lineWinner, setLineWinner] = useState<number[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus("Ganador: " + winner[0]);
    } else {
      setStatus("Siguiente jugador: " + (currentValue === "X" ? "X" : "O"));
    }
  }, [squares]);

  const handleAddValue = (indexC: number, indexR: number) => {
    if (calculateWinner(squares)) return;
    if (!squares[indexC][indexR]) {
      const newSquares = squares.map((row, rowIndex) =>
        row.map((square, colIndex) =>
          rowIndex === indexC && colIndex === indexR ? currentValue : square
        )
      );
      onPlay(newSquares, indexC, indexR);
    }
  };

  const calculateWinner = (squares: squareValue[][]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    setLineWinner([]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a % 3][(a / 3) | 0] &&
        squares[a % 3][(a / 3) | 0] === squares[b % 3][(b / 3) | 0] &&
        squares[a % 3][(a / 3) | 0] === squares[c % 3][(c / 3) | 0]
      ) {
        setLineWinner(lines[i]);
        return squares[a];
      }
    }
  };
  return (
    <>
      <h1>{status}</h1>
      <div className="board">
        {squares.map((square, indexC) =>
          square.map((sq, indexR) => {
            return (
              <Square
                key={indexR}
                value={sq}
                column={indexC}
                row={indexR}
                isWinnerSquare={
                  lineWinner && lineWinner.includes(indexR * 3 + indexC)
                }
                onAddValue={() => handleAddValue(indexC, indexR)}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Board;
