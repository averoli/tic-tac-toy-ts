import { useEffect, useState } from "react";
import Board from "../board/board";
import GameInfo from "../game-info/game-info";
import { GameBoard, squareValue, Move } from "../../../types";

const Game = () => {
  const initialArray: GameBoard = {
    board: Array(3).fill(Array(3).fill(null)),
  };
  const initialMoves: Move = {
    id: -1,
    indexC: 0,
    indexR: 0,
  };
  const [history, setHistory] = useState<GameBoard[]>([initialArray]);
  const [currentValue, setCurrentValue] = useState<squareValue>("X");
  const [currentMove, setCurrentMove] = useState(0);
  const [historyMoves, setHistoryMoves] = useState<Move[]>([initialMoves]);
  const [sorted, setSorted] = useState(historyMoves);

  useEffect(() => {
    setSorted(historyMoves);
  }, [historyMoves]);

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

  const moves = historyMoves.map((move) => {
    let description: string;
    if (move.id > -1) {
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

  const sorting = () => {
    const newMoves = [...sorted];
    setSorted(newMoves.reverse());
    console.log(newMoves);
    
  };

  return (
    <>
      <Board
        squares={history[currentMove].board}
        currentValue={currentValue}
        onPlay={handlePlay}
      />
      
      <div>
        <button onClick={sorting}>Sort</button>
        <ol>{moves}</ol>
      </div>
    </>
  );
};

export default Game;
