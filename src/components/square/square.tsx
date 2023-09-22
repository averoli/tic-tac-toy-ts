import { SquareProps } from "../../../types";
import "./square.scss";

const Square = ({ value, onAddValue, isWinnerSquare }: SquareProps) => {
 
  return (
    <button
      className={`square ${isWinnerSquare && "winner"}`}
      onClick={() => onAddValue()}
    >
      {value}
    </button>
  );
};

export default Square;
