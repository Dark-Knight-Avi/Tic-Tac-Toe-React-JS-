import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import "./style/root.scss"
const App = () => {

  const [board , setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(board); 
  const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O'}`;
  const handleSquareClick = (position) => {
    if(board[position] || winner){
      return;
    }
    setBoard( (prev) => {
        return prev.map((square, pos) => {
          if(pos === position){
            return isXNext ? 'X' : 'O'
          }
          else {
            return square;
          }
        })
    } )
    setIsXNext((prev) => !prev)
  }
  return(
    <div className="app h-[100vh] flex items-center justify-center">
      <h1 className="mb-2 text-5xl">TIC TAC TOE</h1>
      <h2 className="mb-20">{message}</h2>
      <Board board = { board } handleSquareClick = { handleSquareClick }/>
    </div>
  );
};

export default App;
