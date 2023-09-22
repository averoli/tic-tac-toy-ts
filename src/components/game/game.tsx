import { useState } from "react";
import Board from "../board/board";
import { GameBoard, squareValue, Move } from "../../../types";

const Game = () => {
  const initialArray: GameBoard = {
    board: Array(3).fill(Array(3).fill(null)),
  };
  const initialMoves: Move = {
    id: 0,
    indexC: 0,
    indexR: 0,
  };
  const [history, setHistory] = useState<GameBoard[]>([initialArray]);
  const [currentValue, setCurrentValue] = useState<squareValue>("X");
  const [currentMove, setCurrentMove] = useState(0);
  const [historyMoves, setHistoryMoves] = useState<Move[]>([initialMoves]);
  const [sorted, setSorted] = useState(false);

  const toggleSorting = () => {
    setSorted(!sorted);
  };

  const handlePlay = (
    newSquares: squareValue[][],
    indexC: number,
    indexR: number
  ) => {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { board: newSquares } as GameBoard,
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setCurrentValue(currentValue === "X" ? "0" : "X");
    const newMoves = [
      ...historyMoves.filter((mv) => mv.id < currentMove),
      { id: currentMove, indexR, indexC },
    ];
    setHistoryMoves(newMoves);
  };

  const jumpToMove = (nextMove: number) => {
     setCurrentMove(nextMove);
  };

  const sortMoves = (moves: Move[]) => {
    if (sorted) {
      return moves.slice().reverse();
    }
    return moves;
  };

  const moves = sortMoves(historyMoves).map((move) => {
    let description: string;
    if (move.id > 0) {
      description =
        "Ir al movimiento #" +
        (move.id + 1) +
        "  " +
        move.indexC +
        " " +
        move.indexR;
    } else {
      description = "Ir al inicio del juego!";
    }

    return (
      <li key={move.id}>
        <button onClick={() => jumpToMove(move.id)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <Board
        squares={history[currentMove].board}
        currentValue={currentValue}
        onPlay={handlePlay}
      />

      <div>
        <button onClick={toggleSorting}>
          {sorted ? "Sort Descending" : "Sort Ascending"}
        </button>
        <ol>{moves}</ol>
      </div>
    </>
  );
};

export default Game;
