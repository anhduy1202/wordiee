import React, { useState } from 'react';
import * as allWords from "./words.json"
import './App.css';
import Heading from './Components/Heading/Heading';
import Board from './Components/Board/Board';


interface Words {
  words: String[]
}

function App() {
 const [wordLists,setWords] = useState<Words>(allWords)
 //6x5 board
 const [board,setBoard] = useState<String[]>(
["", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", "",
 "", "", "", "", ""]);
 
  return (
    <div className="App">
      <Heading type="h1" text="Wordle Clone"/>
      <div className="board-container">
      <Board board={board }/>
      </div>
    </div>
  );
}

export default App;
