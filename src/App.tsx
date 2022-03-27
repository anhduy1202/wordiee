import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading/Heading';
import Board from './Components/Board/Board';
import { useSelector } from 'react-redux';
import { rootState } from './Components/interface';


interface Words {
  words: String[]
}

function App() {
 //6x5 board
 const board = useSelector((state:rootState) => state.board.board)
 
  return (
    <div className="App">
      <Heading type="h1" text="Wordiee"/>
      <div className="board-container">
      <Board board={board}/>
      </div>
    </div>
  );
}

export default App;
