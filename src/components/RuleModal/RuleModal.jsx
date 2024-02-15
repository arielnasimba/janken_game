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

        <dialog id="my_modal_4" className="modal w-full h-[100rem] flex flex-col ">

            <div className="modal-box w-screen h-[100rem] rounded-none flex flex-col justify-center items-center gap-[7rem] ">

                <h3 className="font-bold text-[35px] text-center">RULES</h3>


                    {/* image rule  */}
                <div className="img_area  w-[98%] h-[42%] bg-no-repeat bg-cover "
                    style={{backgroundImage:`url(${IMAGERULE})`, backgroundSize:`100%`}}>


                </div>


                <div className="modal-action flex justify-center">

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
