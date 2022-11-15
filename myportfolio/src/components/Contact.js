import React from 'react'
import  "../styles/Contact.css"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Contact() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  return (
    
    <div className='h-5/6'>
     <Particles id="tsparticles" 
      
      init={particlesInit} loaded={particlesLoaded} 
       options={
         {
             background: {
                 color: {
                     value: "transparent",
                 },
             },
             fpsLimit: 120,
             interactivity: {
                 events: {
                     onClick: {
                         enable: true,
                         mode: "push",
                     },
                     onHover: {
                         enable: true,
                         mode: "repulse",
                     },
                     resize: true,
                 },
                 modes: {
                     push: {
                         quantity: 4,
                     },
                     repulse: {
                         distance: 200,
                         duration: 0.4,
                     },
                 },
             },
             particles: {
                 color: {
                     value: "#ffffff",
                 },
                 links: {
                     color: "#ffffff",
                     distance: 150,
                     enable: true,
                     opacity: 0.5,
                     width: 1,
                 },
                 collisions: {
                     enable: true,
                 },
                 move: {
                     directions: "none",
                     enable: true,
                     outModes: {
                         default: "bounce",
                     },
                     random: false,
                     speed: 3,
                     straight: false,
                 },
                 number: {
                     density: {
                         enable: true,
                         area: 800,
                     },
                     value: 80,
                 },
                 opacity: {
                     value: 0.5,
                 },
                 shape: {
                     type: "circle",
                 },
                 size: {
                     value: { min: 1, max: 5 },
                 },
             },
             detectRetina: true,
         }
       }
      />

      <h2 className='techTitle text-3x1 flex w-1/2 items-start justify-start text-center pt-4'>CONTACT ME</h2>
      <div className='flex ml-3 mr-3 h-full relative mt-3'>
        <div className='form-contact w-1/2  flex items-center justify-center flex-col h-full mt-3'>         
          <div className='formDiv  w-10/12 flex items-center justify-center flex-col  '>
          <p className='text-introduce text-start w-full mb-8'>{"<form>"}</p>
          <p className='text-invite text-center text-3x1 text-white'>My interest is to find the first job in the IT universe. If my profile has interested you, do not hesitate   to contact me. </p>           
            <div className='m-3 '>
               <input type="text" placeholder="Name" className="input mr-2 " />
               <input type="text" placeholder="Email" className="input " />
            </div>
            <textarea placeholder="Message" className="input w-11/12" />
            <button className="btn mt-5">Send</button>
            <p className='text-introduce text-start w-full mt-3'>{"</form>"}</p>
          </div>
        </div>
        <div className='other-contact w-1/2 flex items-start justify-center flex-col mt-5  '>
        <div className='flex items-start justify-start ml-10 mb-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" class="bi bi-geo-fill"          viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
        </svg> <p className='text-invite text-4xl  ml-5 mb-5'>Córdoba, Argentina</p></div>
        <div className='ml-10 mb-7'><svg href='' xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg></div>
        <div className='ml-10'><svg  href='' xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg></div>
        <p className='text-invite w-full text-center mt-5  text-2xl'>LET'S SHARE A VIRTUAL COFFEE ☕</p>
        </div>
        <div class="waves">
            <div class="wave circulo a"></div>
            <div class="wave circulo b"></div>
            <div class="wave circulo c"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact