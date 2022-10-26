import React from 'react'
import NavBar from '../components/NavBar';
import { Parallax } from 'react-parallax';
import fondo from '../assets/fondo.webp'
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
            <h1 color='red'> HI, I'M GUIDO</h1>
            <h1> WEB DEVELOPER</h1>
            <h4 className='text-3xl'>Full Stack MERN</h4>
          </div>
      </div>
    </Parallax>

    <div className='content content-about bg-black pt-16'>
        <h2>HOLAAAA</h2>
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