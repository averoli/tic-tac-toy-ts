import Square from "../square/square";
import { BoardProps } from "../../../types";
import "./board.scss";
import { log } from "console";

const Board = ({ squares, currentValue, onPlay }: BoardProps) => {
  const handleAddValue = (indexC: number, indexR: number) => {
    console.log();
    
    if (!squares[indexC][indexR]) {
      const newSquares = [...squares];
      newSquares[indexC][indexR] = currentValue;
      onPlay(newSquares, indexC, indexR);
    }
  };
  return (
    <div className="board">
      {squares.map((square, indexC) =>
        square.map((sq, indexR) => {
          return (
            <Square
              key={`${indexR}-${indexC}`}
              value={sq}
              column={indexC}
              row={indexR}
              onAddValue={() => handleAddValue(indexC, indexR)}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
