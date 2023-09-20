import { useEffect, useState } from "react";
import Board from "../board/board";
import GameInfo from "../game-info/game-info";
import { GameBoard } from "../../../types";

const Game = () => {
  const [history, setHistory] = useState<GameBoard>({
    board: Array(3).fill(Array(3).fill(null)),
  });
  const [currentValue, setCurrentValue] = useState("X");
  const [currentMove, setCurrentMove] = useState(0);

  console.log(history);
  
  const handlePlay = (
    newSquares: string[][],
    indexC: number,
    indexR: number
  ) => {
    // const nextHistory: GameBoard[] = [...history.slice(0, currentMove + 1), {board:newSquares}];
    // setHistory(nextHistory);
    // setCurrentMove(nextHistory.length - 1);
    setCurrentValue(currentValue === "X" ? "0" : "X");
  };
  return (
    <>
      <Board
        squares={history.board}
        currentValue={currentValue}
        onPlay={handlePlay}
      />
      <GameInfo />
    </>
  );
};

export default Game;
