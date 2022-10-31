import React from 'react'
import NavBar from '../components/NavBar';
import About from '../components/About';
import { Parallax } from 'react-parallax';
import fondo from '../assets/fondo.webp'
import PDF from '../assets/Guido Seia CV.pdf'
import '../styles/Index.css'

export default function Index() {

  return (
    
    <div>
    <div className='navbar h-screen'>
      <NavBar/>
    </div>   
    <Parallax strength={500} bgImage={fondo} bgImageStyle={{height: '100vh', maxWidth: '400vh', opacity: '.8'}}>

      <div className='content bg-yellow flex align-center justify-center'>
          <div className='text-contentHome align-center justify-center'>
            <h1 color='red' data-aos="zoom-in-up"> HI, I'M GUIDO</h1>
            <h1 data-aos="zoom-in-up"> WEB DEVELOPER</h1>
            <h4 className='text-3xl' data-aos="zoom-in-up">Full Stack MERN</h4>                    
          </div>
          <div className='m-3'>
            <a href={PDF} download="Guido Seia CV" role="button" className="btn-inter text-white" data-aos="fade-up"
     data-aos-duration="3000">DOWNLOAD CV</a>
            <a role="button" className="btn-inter text-white" data-aos="fade-up"
     data-aos-duration="3000">CONTACT ME</a>
            </div>
      </div>
    </Parallax>

    <div className='content content-about bg-black pt-16'>
        <About/>
    </div>
    <Parallax strength={500} bgImage={''}>
      <div className='content'>
          <div className='text-content'></div>
      </div>
    </Parallax>
    </div>
  )
}
{/* <div className='h-screen'>
    <NavBar/>
    </div> */}