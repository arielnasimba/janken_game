import React, { useState } from 'react'
import "../BoardInGame/BoardInGame.css"
import BoardScore from '../BoardScore/BoardScore'
import TRIANGLE from "../../assets/images/bg-triangle.svg"
import PaperButton from '../PaperButton/PaperButton'
import ScissorsButton from '../ScissorsButton/ScissorsButton'
import RockButton from '../RockButton/RockButton'
import RuleModal from '../RuleModal/RuleModal'

export default function BoardInGame(props) {


    const [activeRockBtn, setActiveRockBtn] = useState(false);
    const [activePaperBtn, setActivePaperBtn] = useState(false);
    const [activeScissorsBtn, setActiveScissorsBtn] = useState(false);

    let btn_player_active = false;
    let btn_cp_active = true;

    let randomBtn
  return (



    <div className='board_in_game h-screen w-screen flex flex-col justify-center items-center gap-[6rem]'>

        <BoardScore />

        <div className="list_btns w-[19rem]  h-[19rem]  bg-no-repeat bg-center " >

            <div className="top w-full h-1/2  flex justify-between">

                            {/* player button */}
                <div className="left h-[84%] w-[42%]    ">


                    <PaperButton />

                    <div className="text_b text-center">
                        <p className='tracking-[3px] text-[14px] mt-5'>YOU PICKED</p>
                    </div>
                    
                </div>
                            {/* computer button */}
                <div className="right h-[84%] w-[42%]  ">

                    {/* <ScissorsButton /> */}

                    <div className="btn_cp  h-full w-full flex justify-center items-center">




                        {!btn_cp_active ? <ScissorsButton /> : 
                                                 <div className="area_grey bg-[rgba(20,21,57,0.3)] rounded-[50%] h-[80%] w-[80%]"></div>
                            } 

                    </div>


                    <div className="text_b text-start w-[9.8rem]   ">
                        <p className='tracking-[3px] text-[14px] mt-5'>THE HOUSE PICKED</p>
                    </div>
                    

                </div>

                
                
            </div>

            <div className="bottom w-full h-1/2  flex flex-col justify-start items-center hidden">
                        {/* rock button */}
                <div className="box_bottom h-[84%] w-[42%] ">

                    <RockButton />

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
