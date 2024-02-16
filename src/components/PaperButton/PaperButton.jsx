import React from 'react'
import "../PaperButton/PaperButton.css"
import PAPER from "../../assets/images/icon-paper.svg"

export default function PaperButton(props) {
  // console.log(props.play);


  let display_btn = () =>{
    console.log("You choose paper");
  }

  return (
    <div  id='paper'  className='paper_button bg-white h-full w-full rounded-[50%] flex items-center justify-center'>

        <button onClick={  ()=>{props.play();display_btn(); props.setSelectedButton('paper');  } } type="button " className='bg-white w-[80%] h-[80%] rounded-[50%] bg-no-repeat bg-[45%]'
            style={{backgroundImage:`url(${PAPER})`}} >

        </button>



    </div>
  )
}
