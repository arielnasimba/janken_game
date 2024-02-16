import React, { useState, useEffect } from 'react'
import "../BoardInGame/BoardInGame.css"
import BoardScore from '../BoardScore/BoardScore'

import PaperButton from '../PaperButton/PaperButton'
import ScissorsButton from '../ScissorsButton/ScissorsButton'
import RockButton from '../RockButton/RockButton'
import RuleModal from '../RuleModal/RuleModal'

export default function BoardInGame(props) {
    console.log(props.setScoreValue);

    //* start list of buttons state */
    const [activeRockBtn, setActiveRockBtn] = useState(false);
    const [activePaperBtn, setActivePaperBtn] = useState(false);
    const [activeScissorsBtn, setActiveScissorsBtn] = useState(false);
    //*  end list of buttons state */

    let btn_cp_active = false;

    /** Get random button components
     * 
     * @param {*} el1 : button component
     * @param {*} el2 : button component
     * @param {*} el3 : button component
     * @returns a random component
     */
    const randomBtn = (el1,el2,el3) => {
        const arr = [el1, el2, el3]
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex] ;
    }
    
    //** start usestate btn computer **/
    const [btnComputer, setBtnComputer] = useState(randomBtn(PaperButton, ScissorsButton, RockButton))
    //** end usestate btn computer **/


    //** start display btn player  **/

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
    
    //** end display btn player  **/



    //** start check btn player and computer btn **/

    // useEffect( () => {


    //     //*  case for rock btn player **/
    //     if (activeRockBtn) {

    //         if ( btnComputer.props.id == "rock" ) {

    //             console.log("rock btn is active for player");
    //             console.log("rock btn is active for computer");
    //             console.log("DRAW");
                
    //         } 
    //         else if (btnComputer.props.id == "paper") {
    //             console.log("rock btn is active for player");
    //             console.log("paper btn is active for computer");
    //             console.log("You lose");
                
    //         } 
    //         else if (btnComputer.props.id == "scissors") {
    //             console.log("rock btn is active for player");
    //             console.log("scissors btn is active for computer");
    //                 console.log("You win");
    //                 // props.setScoreValue();

    //         } 
            
    //     }
        
    //     //*  case for paper btn player **/

    //     else if (activePaperBtn) {

    //         if ( btnComputer.props.id == "rock" ) {

    //             console.log("paper btn is active for player");
    //             console.log("rock btn is active for computer");
    //             console.log("You win");
    //             // props.setScoreValue();
                
    //         } 
    //         else if (btnComputer.props.id == "paper") {
    //             console.log("paper btn is active for player");
    //             console.log("paper btn is active for computer");
    //             console.log("DRAW");
                
    //         } 
    //         else if (btnComputer.props.id == "scissors") {
    //             console.log("paper btn is active for player");
    //             console.log("scissors btn is active for computer");
    //             console.log("You lose");

    //         } 

    //     }

    //     //*  case for scissors btn player **/

    //     else if (activeScissorsBtn) {

    //         if ( btnComputer.props.id == "rock" ) {

    //             console.log("scissors btn is active for player");
    //             console.log("rock btn is active for computer");
    //             console.log("You lose");
                
    //         } 
    //         else if (btnComputer.props.id == "paper") {
    //             console.log("scissors btn is active for player");
    //             console.log("paper btn is active for computer");
    //             console.log("You win");
    //             // props.setScoreValue();
                
    //         } 
    //         else if (btnComputer.props.id == "scissors") {
    //             console.log("scissors btn is active for player");
    //             console.log("scissors btn is active for computer");
    //             console.log("DRAW");

    //         } 
            
    //     }
        
    // });

    //** end check btn player and computer btn**/


//** start check btn player  **/

useEffect(() => {
    //* Logique pour vérifier le résultat de la partie */
    const checkResult = () => {
        if (activeRockBtn) {
            if (btnComputer.props.id == "rock") {
                console.log("DRAW");
            } 
            else if (btnComputer.props.id == "paper") {
                console.log("You lose");
            } 
            else if (btnComputer.props.id == "scissors") {
                console.log("You win");
                props.setScoreValue(score => score + 1); 
            }

        } else if (activePaperBtn) {

            if (btnComputer.props.id == "paper") {
                console.log("DRAW");
            } 
            else if (btnComputer.props.id == "scissors") {
                console.log("You lose");
            } 
            else if (btnComputer.props.id == "rock") {
                console.log("You win");
                props.setScoreValue(score => score + 1); 
            }


        } else if (activeScissorsBtn) {

            if (btnComputer.props.id == "scissors") {
                console.log("DRAW");
            } 
            else if (btnComputer.props.id == "rock") {
                console.log("You lose");
            } 
            else if (btnComputer.props.id == "paper") {
                console.log("You win");
                props.setScoreValue(score => score + 1); 
            }
        }
    } 

    checkResult();
},[activeRockBtn, activePaperBtn, activeScissorsBtn, btnComputer] );


  return (

    <div className='board_in_game h-screen w-screen flex flex-col justify-center items-center gap-[6rem]'>

        <BoardScore score={props.score}  />

        <div className="list_btns w-[19rem]  h-[19rem]  bg-no-repeat bg-center " >

            <div className="top w-full h-1/2  flex justify-between">

                <div className="left h-[84%] w-[42%]">

                            {/* player button */}

                        <div className="area_gr  h-[100%] w-[100%]">

                            {activePaperBtn && < PaperButton key={"paper"} />}
                            {activeScissorsBtn && <ScissorsButton key={"scissors"} />}
                            {activeRockBtn && <RockButton key={"rock"} />}

                        </div>


                    <div className="text_b text-center">
                        <p className='tracking-[3px] text-[14px] mt-5'>YOU PICKED</p>
                    </div>
                    
                </div>
                            {/* computer button */}
                <div className="right h-[84%] w-[42%]  ">


                    <div className="btn_cp  h-full w-full flex justify-center items-center">

                                            {/* here put random button  */}
                        {!btn_cp_active ?   btnComputer  : 
                                                 <div className="area_grey bg-[rgba(20,21,57,0.3)] rounded-[50%] h-[80%] w-[80%]"></div>
                            } 

                    </div>


                    <div className="text_b text-start w-[9.8rem]   ">
                        <p className='tracking-[3px] text-[14px] mt-5'>THE HOUSE PICKED</p>
                    </div>
                    

                </div>

                
                
            </div>

            <div className="bottom w-full h-1/2  flex flex-col justify-start items-center bg-red-400 hidden">
                        {/* rock button */}
                <div className="box_bottom h-[84%] w-[42%] bg-black">


                </div>

            </div>

            <div className="restart_game  w-full h-[68%] flex flex-col items-center justify-end">

                <div className="box_inside  h-[65%] w-[75%] flex flex-col justify-between items-center ">

                    <div className="text_state w-[80%] h-[45%]  text-center">
                        <h1 className='text-[3.3rem] font-[700] text-white h-full p-0 w-full'>YOU WIN</h1>
                    </div>
                            
                    <div className="btn_play_again_area w-full h-[37%] ">

                    <button className="btn w-full h-full text-[18px] tracking-[2px] text-[rgb(59, 67, 99)] ">PLAY AGAIN</button>

                    </div>

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
