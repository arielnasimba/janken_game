import { useEffect, useState } from 'react'
import './App.css'
import BoardGame from './components/BoardGame/BoardGame'
import BoardInGame from './components/BoardInGame/BoardInGame';

function App() {


  const [selectedButton, setSelectedButton] = useState(null);
  const [scoreValue, setScoreValue] = useState(0);

  let increase_score = ()=>{
    setScoreValue(scoreValue+1)
  }
  let decrease_score = ()=>{

    if (scoreValue > 0) {
      
      setScoreValue(scoreValue-1)
    }
  }


  const [inGame, setInGame] = useState(false);

  let play = () =>{

    setInGame( {inGame:true});
  }

  let resetGame = () => {
    setInGame(false); 
}


  return (
    <>

        {!inGame ?( <BoardGame score={scoreValue}   setSelectedButton={setSelectedButton} play={play} /> )
                  : 
                    ( <BoardInGame decrease_score={decrease_score} score={scoreValue} resetGame={resetGame} setScoreValue={increase_score}  selectedButton={selectedButton}  /> )}

    </>
  )
}

export default App
