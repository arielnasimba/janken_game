import React from 'react'
import "../RuleModal/RuleModal.css"

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

        <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        </dialog>
    </>
  )
}
