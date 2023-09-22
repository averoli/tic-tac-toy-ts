import { useState, useEffect } from "react";
import { GameInfoProps } from "../../../types";

const GameInfo = ({ moves }: GameInfoProps) => {
  const [sortedMoves, setSortedMoves] = useState(moves);

  useEffect(() => {}, [moves]);

  const sorting = () => {
    const newMoves = [...sortedMoves];
    setSortedMoves(newMoves.reverse());
  };

  return (
    <div>
      <button onClick={sorting}>Sort</button>
      <ol>
        {sortedMoves.map((move, index) => (
          <li>{move.id}</li>
        ))}
      </ol>
    </div>
  );
};

export default GameInfo;
