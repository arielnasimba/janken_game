import React from 'react'
import "../BoardGame/BoardGame.css"
import BoardScore from '../BoardScore/BoardScore'
import TRIANGLE from "../../assets/images/bg-triangle.svg"
import PaperButton from '../PaperButton/PaperButton'
import ScissorsButton from '../ScissorsButton/ScissorsButton'
import RockButton from '../RockButton/RockButton'
import RuleModal from '../RuleModal/RuleModal'

export default function BoardGame(props) {
    console.log(props.setSelectedButton);


  return (



    <div className='board_game h-screen w-screen flex flex-col justify-center items-center gap-[6rem]'>

        <BoardScore />

        <div className="list_btns w-[19rem]  h-[19rem]  bg-no-repeat bg-center " style={{backgroundImage:`url(${TRIANGLE})`, backgroundSize:`85%`}}>

            <div className="top w-full h-1/2  flex justify-between">

                            {/* paper button */}
                <div className="left h-[84%] w-[42%]    ">

                    <PaperButton  setSelectedButton={props.setSelectedButton} play={props.play} />
                    
                </div>
                            {/* scissor button */}
                <div className="right h-[84%] w-[42%]   ">

                    <ScissorsButton setSelectedButton={props.setSelectedButton} play={props.play} />

                </div>
                
            </div>

            <div className="bottom w-full h-1/2  flex flex-col justify-start items-center ">
                        {/* rock button */}
                <div className="box_bottom h-[84%] w-[42%] ">

                    <RockButton setSelectedButton={props.setSelectedButton}  play={props.play} />

                </div>

            </div>


            </div>


                {/* rules modal area */}
            <div className="bottom_modal_area  w-[90%] h-[2.5rem] flex justify-center">

            <RuleModal />

        </div>

    </div>
  )
}
