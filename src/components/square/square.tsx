import { SquareProps } from "../../../types";
import "./square.scss";

const Square = ({ value, column, row, onAddValue }: SquareProps) => {

  return (
    <button className="square" onClick={() => onAddValue()}>
      {value}
    </button>
  );
};

export default Square;
