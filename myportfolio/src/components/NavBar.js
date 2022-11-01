import React from 'react'
import '../styles/NavBar.css'
import { Link as LinkRouter  } from 'react-router-dom'
import { useScrollTo } from "react-use-window-scroll";

export default function NavBar() {
  
      const scrollTo = useScrollTo();

      return (
      
            <div className="navbar justify-evenly align-center ">
                  <li className="btn-nav btn-ghost  normal-case text-xs text-white font-semibold "><LinkRouter to='/'>Home</LinkRouter></li>
                  <li className="btn-nav btn-ghost  normal-case text-xs text-white font-semibold" onClick={() => scrollTo({ top: 530, left: 0, behavior: "smooth", block: 'start' })} >About</li>
                  <li className="btn-nav btn-ghost  normal-case text-xs text-white font-semibold">Contact</li>
            </div>
       

  )
}
