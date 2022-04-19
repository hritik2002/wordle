import React from "react";
import Key from "../../Key";
import './style.css'

const BoardRow = ({ rowArr }) => {
  return (
    <div className="baord__row">
      {rowArr.map((val, index) => (
        <Key key={index} keyObj={val} />
      ))}
    </div>
  );
};

export default BoardRow;
