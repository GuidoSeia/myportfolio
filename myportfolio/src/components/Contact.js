import React from 'react'
import  "../styles/Contact.css"


function Contact() {
  return (
    <div>
      <h2 className='techTitle text-2x1 flex w-full items-center justify-center'>CONTACT</h2>
      <div className='flex '>

        <div className='form-contact w-1/2 bg-slate-100 flex items-center justify-center flex-col'>
          hola
          <input type="email" placeholder="" className="input " />
        </div>

        <div className='other-contact w-1/2 bg-black flex items-center justify-center'>
          todo ok
        </div>

      </div>
    </div>
  )
}

export default Contact