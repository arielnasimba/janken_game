import { useState } from 'react'
import './App.css'
import BoardGame from './components/BoardGame/BoardGame'
import BoardInGame from './components/BoardInGame/BoardInGame';

function App() {

  let test = true;

  const [inGame, setInGame] = useState(false);

  let play = () =>{

    setInGame( {inGame:true});
  }

  // let testT = true;

  return (
    <>

        {!inGame ? <BoardGame  play={play} /> : <BoardInGame />}

    </>
  )
}

export default App
