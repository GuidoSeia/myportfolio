import React from 'react'
import NavBar from '../components/NavBar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import { Parallax } from 'react-parallax';
import video from '../assets/videofondo.mp4'
import PDF from '../assets/Guido Seia CV.pdf'
import svg from '../assets/wave.svg'
import '../styles/Index.css'

export default function Index() {

  return (
    
    <div>
    <div className='navbar h-screen'>
      <NavBar/>
    </div>   
    <Parallax strength={500}  bgImageStyle={{height: '100vh', maxWidth: '400vh', opacity: '.8'}}>
      <div className='content contentHome bg-yellow flex align-center justify-center w-full'>
      <video  className='video blur-sm' src={video} autoPlay loop playsInline muted />
          <div className='text-contentHome align-center justify-center text-center'>
            <h1 color='red' data-aos="zoom-in-down"  data-aos-duration="1000"> HI, I'M GUIDO</h1>
            <h1 data-aos="zoom-in-down" data-aos-duration="2000"> WEB DEVELOPER</h1>
            <h4 className='text-3xl' data-aos="zoom-in-down" data-aos-duration="3000">FullStack MERN</h4>                    
          </div>
          <div className='m-3'>
            <a href={PDF} download="Guido Seia CV" role="button" className="btn-inter text-white" data-aos="fade-up"
        data-aos-duration="3000">DOWNLOAD CV</a>
            <a role="button" className="btn-inter text-white" data-aos="fade-down"
        data-aos-duration="3000">CONTACT ME</a>
            </div>
      </div>
    </Parallax>
    <Parallax strength={500} bgImage={''}>
    <div className='content-2 content-about bg-black '>
        <About/>
    </div>
    </Parallax>
    <Parallax strength={500} bgImage={''}>
      <div className='content-3'>
          <Portfolio/>
      </div>
    </Parallax>
    <Parallax strength={500} bgImage={''}>
      <div className='content-4'>
          <Portfolio/>
      </div>
    </Parallax>
    </div>
  )
}
{/* <div className='h-screen'>
    <NavBar/>
    </div> */}

/* 
    <div className='w-full flex items-end justify-end'>
              <img className='svg w-full flex ' src = {svg} alt="Mi SVG feliz"/>
            </div> */