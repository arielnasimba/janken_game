import React from 'react'
import "../ScissorsButton/ScissorsButton.css"
import SCISSOR from "../../assets/images/icon-scissors.svg"

export default function ScissorsButton() {
  return (
  

    <div className='scissors_button bg-white h-full w-full rounded-[50%] flex items-center justify-center'>

    <button type="button " className='bg-white w-[80%] h-[80%] rounded-[50%] bg-no-repeat bg-[45%]'
        style={{backgroundImage:`url(${SCISSOR})`}}>

    </button>



</div>

    
  )
}



