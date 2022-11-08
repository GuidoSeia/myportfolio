import React from 'react'
import '../styles/Portfolio.css'
import Amazing from '../assets/amazing.mp4'
import miTy from '../assets/miTi.mp4'
import salty from '../assets/theSalty.mp4'



export default function Portfolio() {

  const WebProjects=[
    {
      name:"Amazing Events",
      video: "https://i.imgur.com/zEfU0Dj.mp4",
      github: "https://github.com/GuidoSeia/amazingEvents-JS"
    },

    {
      name:"My Tinerary",
      video: "https://i.imgur.com/zEfU0Dj.mp4",
      github: "https://github.com/GuidoSeia/mytinerary-react"
    },

    {
      name:"The Salty",
      video: "https://i.imgur.com/zEfU0Dj.mp4",
      github: "https://github.com/GuidoSeia/ecommerce-thesalty-frontend"
    },
    
  ]


  const MobileProjects=[

    {
      name:"My Tinerary",
      video: {miTy},
      github: "https://github.com/GuidoSeia/mytinerary-reactnative"
    },

    {
      name:"The Salty",
      video: {miTy},
      github: "https://github.com/GuidoSeia/ecommerce-thesalty-react-native"
    },
    
  ]



  return (
    <div className='flex items-center flex-col'>
      <div className='w-full'>
          <p className='text-introduce '><br />{"<section>"}</p>         
      </div>
      <div className='flex w-4/5 items-center justify-center flex-col'>
        <div className='flex items-center justify-center'>
          <div className='text-portfolio text-3x1 flex flex-col text-3x1 '>
            <div className='techTitle mr-1 ml-4'data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="100" >M</div> <div className='techTitle mr-4' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="250">Y</div> <div className='techTitle mr-1' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="400">P</div> <div className='techTitle mr-1'data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="550">R</div> <div className='techTitle mr-1' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700">O</div> <div className='techTitle mr-1' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="850">J</div> <div className='techTitle mr-1' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">E</div> <div className='techTitle mr-1' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1150">C</div> <div className='techTitle mr-1' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1300">T</div> <div className='techTitle mr-1' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1450">S</div> 
          </div> 
        </div>     
        <div className='w-full'>
          <p className='text-introduce  mb-4'><br />{"<"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>{">"}</p>  
        </div>
        <div className='container-cards flex flex-wrap w-full items-center justify-center'>
          {WebProjects.map(web=>
            <div className="carouselProjects carousel-center max-w-xs flex items-center bg-primary">
            <div className="carousel-item m-3">
            <video className="carousel-video" src={web.video} autoPlay loop muted/>

            </div>                                                 
          </div>
          )}
          

        </div>
        <div className='w-full flex'>
          <p className='text-introduce flex flex-col'><br />{"</"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>{">"}</p>  
        </div>
        <div className='w-full'>
          <p className='text-introduce  mb-4'><br />{"<"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>{">"}</p>  
        </div>
        <div>
          
        </div>
        <div className='w-full'>
          <p className='text-introduce '><br /> {"</"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>{">"}</p>  
        </div>
      </div>
      <div className='w-full'>
      <p className='text-introduce mb-4'>{"</section>"}</p>
      </div>
    </div>
  )
}

