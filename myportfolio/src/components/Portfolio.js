import React from 'react'
import '../styles/Portfolio.css'


export default function Portfolio() {
  return (
    <div className='flex items-center flex-col'>
      <div className='w-full'>
          <p className='text-introduce '><br />{"<section>"}</p>         
      </div>
      <div className='flex w-3/4 items-center justify-center flex-col'>
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
          <p className='text-introduce  mb-4'><br />{"<web>"}</p>  
        </div>
        <div>

        </div>
        <div className='w-full'>
          <p className='text-introduce'><br />{"</web>"}</p>  
        </div>
        <div className='w-full'>
          <p className='text-introduce  mb-4'><br />{"<mobile>"}</p>  
        </div>
        <div>
          
        </div>
        <div className='w-full'>
          <p className='text-introduce '><br />{"</mobile>"}</p>  
        </div>
      </div>
      <div className='w-full'>
      <p className='text-introduce mb-4'>{"</section>"}</p>
      </div>
    </div>
  )
}

