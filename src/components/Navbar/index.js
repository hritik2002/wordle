import React, { useContext } from "react";
import { AppContext } from "../../App";
import './style.css'

const Navbar = () => {
  const { board, setBoard, setCursor, cursor, setKeyboard } =
    useContext(AppContext);
  const handleRestart = () => {
    setKeyboard([
      [
        { value: "Q", status: "" },
        { value: "W", status: "" },
        { value: "E", status: "" },
        { value: "R", status: "" },
        { value: "T", status: "" },
        { value: "Y", status: "" },
        { value: "U", status: "" },
        { value: "I", status: "" },
        { value: "O", status: "" },
        { value: "P", status: "" },
      ],
      [
        { value: "A", status: "" },
        { value: "S", status: "" },
        { value: "D", status: "" },
        { value: "F", status: "" },
        { value: "G", status: "" },
        { value: "H", status: "" },
        { value: "J", status: "" },
        { value: "K", status: "" },
        { value: "L", status: "" },
      ],
      [
        { value: "Enter", status: "" },
        { value: "Z", status: "" },
        { value: "X", status: "" },
        { value: "C", status: "" },
        { value: "V", status: "" },
        { value: "B", status: "" },
        { value: "N", status: "" },
        { value: "M", status: "" },
        { value: "Back", status: "" },
      ],
    ]);
    localStorage.setItem(
      "board",
      JSON.stringify([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "F", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ])
    );
    setBoard([
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
    ]);
    localStorage.setItem(
      "cursor",
      JSON.stringify({
        currentRow: 0,
        currentCol: 0,
      })
    );
    setCursor({
      currentRow: 0,
      currentCol: 0,
    });
  };

  return (
    <div className="navbar__container">
      <p>Wordle</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Navbar;
