import { useState } from 'react'
import './App.css'
import BoardGame from './components/BoardGame/BoardGame'
import BoardInGame from './components/BoardInGame/BoardInGame';

function App() {


  const [selectedButton, setSelectedButton] = useState(null);


  const [inGame, setInGame] = useState(false);

  let play = () =>{

    setInGame( {inGame:true});
  }

  // let testT = true;

  return (
    <>

        {!inGame ?( <BoardGame setSelectedButton={setSelectedButton} play={play} /> )
                  : 
                    ( <BoardInGame selectedButton={selectedButton}  /> )}

    </>
  )
}

export default App
