import React, { useContext } from "react";
import { AppContext } from "../../App";
import BoardRow from "./BoardRow";
import './style.css'
const Board = () => {
  const { board, setBoard, setCursor, cursor } = useContext(AppContext);
  
  return (
    <div className="board__container">
      {board.map((arr, key) => (
        <BoardRow rowArr={[...arr]} key={key} />
      ))}
    </div>
  );
};

export default Board;
