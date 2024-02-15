import React from 'react'
import "../BoardScore/BoardScore.css"
import LOGO from "../../assets/images/logo.svg"

export default function BoardScore() {
  return (
    <div className='board_score w-[19rem] h-[6rem] outline outline-[rgba(96,110,133,1)] rounded-[5px] flex justify-center items-center'>

        <div className="box_inside h-[75%] w-[93%] flex ">

            <div className="left h-full w-[72%]  flex items-center">

                <div className="box_left w-[55%] h-[90%]  flex justify-center items-center">

                    <div className="box_inside_left w-[85%] h-[90%]  flex flex-col justify-center">
                        
                        <div className={`box_l h-[92%] w-[91%] bg-no-repeat bg-cover  `}
                        style={{backgroundImage:`url(${LOGO})` }}
                        >


                        </div>


                    </div>

                </div>

            </div>

            <div className="right h-full w-[28%] bg-white rounded-[4px] flex items-center justify-center">

                <div className="text_score w-[50%] h-[90%]  flex flex-col">

                    <div className="score_box w-full h-[40%] ">

                        <p className='text-[#2a46c0] 
                        text-center'>score</p>
                    </div>

                        {/* change here with points */}

                        <div className="score_value w-full h-[60%] text-center">

                            <span className='text-[42px] opacity-[0.8]'>12</span>

                        </div>


                </div>

            </div>

        </div>

    </div>
  )
}
