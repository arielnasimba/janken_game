import React from 'react'
import "../RuleModal/RuleModal.css"
import CLOSE from "../../assets/images/icon-close.svg"
import IMAGERULE from "../../assets/images/image-rules.svg"

export default function RuleModal() {
  return (
    <>
        <button 
        className='rule_modal h-full w-[8.4rem] 
                    rounded-[8px] 
                        outline outline-[2px] 
                            outline-[rgba(96,110,133,1)]             text-center 
                                flex justify-center items-center' 

        onClick={()=>document.getElementById('my_modal_4').showModal()}>

            <span className='text-white opacity-[0.8] tracking-[4px] text-[16px]'>RULES</span>

        </button>

        <dialog id="my_modal_4" className="modal w-full h-[100rem] flex flex-col mb-0 pb-0 
        min-[1366px]:flex min-[1366px]:flex-col  min-[1366px]:items-center 
        min-[1366px]:justify-start
        
                    ">

            <div className="modal-box w-screen h-[100rem] 
                                rounded-none flex flex-col 
                                justify-center items-center gap-[7rem] 
            min-[1366px]:w-[20rem] min-[1366px]:h-[20rem] min-[1366px]:rounded-[5px]">


                    <div className="rule_top bg-black w-full h-[5%] flex">

                        <div className="left_rule_top w-[6rem] h-full bg-blue-400">
                        <h3 className="font-bold text-[35px] text-center m-0 p-0">RULES</h3>

                        </div>




                    </div>


                    {/* image rule  */}
                <div className="img_area  w-[98%] h-[42%] bg-no-repeat bg-cover "
                    style={{backgroundImage:`url(${IMAGERULE})`, backgroundSize:`100%`}}>


                </div>


                <div className="modal-action flex justify-center min-[1366px]:bg-black">

                  <form method="dialog" >
                    {/* if there is a button, it will close the modal */}
                    <button className="btn bg-white border-none"> 
                        <img src={CLOSE} alt="" srcset="" />    
                    </button>

                  </form>

                </div>

            </div>

        </dialog>
    </>
  )
}
