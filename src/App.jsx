import { useState } from 'react'
import './App.css'
import BoardGame from './components/BoardGame/BoardGame'
import BoardInGame from './components/BoardInGame/BoardInGame';

function App() {


  const [selectedButton, setSelectedButton] = useState(null);
  const [scoreValue, setScoreValue] = useState(0);

  let increase_score = ()=>{
    setScoreValue({scoreValue: scoreValue+1})
  }


  const [inGame, setInGame] = useState(false);

  let play = () =>{

    setInGame( {inGame:true});
  }

  // let testT = true;

  return (
    <>

        {!inGame ?( <BoardGame score={scoreValue} setScoreValue={setScoreValue}  setSelectedButton={setSelectedButton} play={play} /> )
                  : 
                    ( <BoardInGame score={scoreValue} setScoreValue={setScoreValue}  selectedButton={selectedButton}  /> )}

    </>
  )
}

export default App
