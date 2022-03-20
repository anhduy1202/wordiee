import React, { useState } from 'react';
import * as allWords from "./words.json"
import './App.css';


interface Words {
  words: String[]
}

function App() {
 const [wordLists,setWords] = useState<Words>(allWords)
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
