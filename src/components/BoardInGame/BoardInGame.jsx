import React, { useState, useEffect } from 'react'
import "../BoardInGame/BoardInGame.css"
import BoardScore from '../BoardScore/BoardScore'

import PaperButton from '../PaperButton/PaperButton'
import ScissorsButton from '../ScissorsButton/ScissorsButton'
import RockButton from '../RockButton/RockButton'
import RuleModal from '../RuleModal/RuleModal'

export default function BoardInGame(props) {
    console.log(props);


    const [activeRockBtn, setActiveRockBtn] = useState(false);
    const [activePaperBtn, setActivePaperBtn] = useState(false);
    const [activeScissorsBtn, setActiveScissorsBtn] = useState(false);

    let btn_cp_active = false;

    let randomBtn = () => {
        const buttons = [PaperButton, ScissorsButton, RockButton];
        const randomIndex = Math.floor(Math.random() * buttons.length);
        return buttons[randomIndex];
    }
    let RandomButton = randomBtn(); 

    useEffect(() => {
        switch (props.selectedButton) {
          case 'rock':
            setActiveRockBtn(true);
            setActivePaperBtn(false);
            setActiveScissorsBtn(false);
            break;
          case 'paper':
            setActiveRockBtn(false);
            setActivePaperBtn(true);
            setActiveScissorsBtn(false);
            break;
          case 'scissors':
            setActiveRockBtn(false);
            setActivePaperBtn(false);
            setActiveScissorsBtn(true);
            break;
          default:
            setActiveRockBtn(false);
            setActivePaperBtn(false);
            setActiveScissorsBtn(false);
            break;
        }
      }, [props.selectedButton]);
    


  return (



    <div className='board_in_game h-screen w-screen flex flex-col justify-center items-center gap-[6rem]'>

        <BoardScore />

        <div className="list_btns w-[19rem]  h-[19rem]  bg-no-repeat bg-center " >

            <div className="top w-full h-1/2  flex justify-between">

                <div className="left h-[84%] w-[42%]">

                            {/* player button */}

                        <div className="area_gr  h-[100%] w-[100%]">

                        {/* Afficher le bouton sélectionné */}
                        {activePaperBtn && <PaperButton />}
                        {activeScissorsBtn && <ScissorsButton />}
                        {activeRockBtn && <RockButton />}

                        </div>


                    <div className="text_b text-center">
                        <p className='tracking-[3px] text-[14px] mt-5'>YOU PICKED</p>
                    </div>
                    
                </div>
                            {/* computer button */}
                <div className="right h-[84%] w-[42%]  ">


                    <div className="btn_cp  h-full w-full flex justify-center items-center">

                                            {/* here put random button  */}
                        {!btn_cp_active ?   <RandomButton /> : 
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
