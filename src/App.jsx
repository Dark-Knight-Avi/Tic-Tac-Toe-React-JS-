import React from "react";
import Board from "./components/Board";
import "./style/root.scss"
export default () => (
  <div className="app h-[100vh] flex items-center justify-center">
    <h1 className="mb-20 text-5xl">TIC TAC TOE</h1>
    <Board/>
  </div>
);
