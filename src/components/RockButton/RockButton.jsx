import React from 'react'
import "../RockButton/RockButton.css"
import ROCK from "../../assets/images/icon-rock.svg"

export default function RockButton(props) {
  let display_btn = () =>{
    console.log("you choose Rock");
  }

  return (


    <div className='rock_button bg-white h-full w-full rounded-[50%] flex items-center justify-center'>

    <button onClick={()=> {props.play(); display_btn() ; props.setSelectedButton('rock') } }  type="button " className='bg-white w-[80%] h-[80%] rounded-[50%] bg-no-repeat bg-[45%]'
        style={{backgroundImage:`url(${ROCK})`}}>

    </button>



</div>

  )
}


