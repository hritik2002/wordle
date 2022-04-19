import React, { useState, createContext, useEffect } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Navbar from "./components/Navbar";
const AppContext = createContext();

function App() {
  let word = "Navin".toUpperCase();
  const [board, setBoard] = useState([
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  ]);

  const [keyBoard, setKeyboard] = useState([
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
  const [cursor, setCursor] = useState({
    currentRow: 0,
    currentCol: 0,
  });
  const handleBackSpace = () => {
    if (cursor.currentCol === 0) return;

    let tempCursor = { ...cursor };
    tempCursor.currentCol -= 1;
    let temp = [...board];
    temp[tempCursor.currentRow][tempCursor.currentCol].value = "";
    setBoard([...temp]);
    setCursor({ ...tempCursor });
  };
  let found = {},
    present = {},
    notFound = {};
  const handleEnter = () => {
    if (cursor.currentCol < 5) return;
    let temp = [...board];
    for (let i = 0; i < 5; i++) {
      if (word[i] === board[cursor.currentRow][i].value && !present[word[i]]) {
        temp[cursor.currentRow][i].status = "found";
        found[word[i]] = true;
      } else if (
        word.indexOf(board[cursor.currentRow][i].value) != -1 &&
        !found[board[cursor.currentRow][i].value]
      ) {
        temp[cursor.currentRow][i].status = "present";
        present[board[cursor.currentRow][i].value] = true;
      } else {
        temp[cursor.currentRow][i].status = "notFound";
        // notFound[word[i]] = true;
      }
    }
    let tempKeyBoard = [...keyBoard];
    for (let i = 0; i < keyBoard.length; i++) {
      for (let j = 0; j < keyBoard[i].length; j++) {
        if (
          found[keyBoard[i][j].value] &&
          tempKeyBoard[i][j].status !== "present"
        ) {
          tempKeyBoard[i][j].status = "found";
        } else if (
          present[keyBoard[i][j].value] &&
          tempKeyBoard[i][j].status !== "found"
        ) {
          tempKeyBoard[i][j].status = "present";
        } else {
          // tempKeyBoard[i][j].status = "notFound";
        }
      }
    }
    setKeyboard(tempKeyBoard);
    setBoard(temp);
    setTimeout(() => {
      if (cursor.currentRow === 5) {
        alert("Yay ! Reached at end");
        return;
      }
    }, 200);
    let tempCursor = { ...cursor };
    tempCursor.currentCol = 0;
    ++tempCursor.currentRow;
    setCursor({ ...tempCursor });
  };

  const handleKeyPress = (keyVal) => {
    if (keyVal.trim().length === 0) return;
    if (cursor.currentCol >= 5) {
      return;
    }
    let tempCursor = { ...cursor };
    let temp = [...board];
    temp[tempCursor.currentRow][tempCursor.currentCol].value =
      keyVal.toUpperCase();
    setBoard((prev) => {
      return [...temp];
    });
    setCursor((prev) => {
      return { ...prev, currentCol: prev.currentCol + 1 };
    });
  };

  useEffect(() => {
    const userKeyPress = (e) => {
      if (e.key === "Backspace") {
        handleBackSpace();
      } else if (e.key === "Enter") {
        handleEnter();
      } else {
        handleKeyPress(e.key);
      }
    };
    window.addEventListener("keydown", userKeyPress);

    return () => {
      window.removeEventListener("keydown", userKeyPress);
    };
  }, [cursor]);

  return (
    <AppContext.Provider
      value={{
        board,
        setBoard,
        keyBoard,
        setKeyboard,
        cursor,
        setCursor,
        handleEnter,
        handleBackSpace,
        handleKeyPress,
      }}
    >
      <div className="App__container">
        <Navbar />
        <Board />
        <Keyboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
