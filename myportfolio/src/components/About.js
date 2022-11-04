import React from 'react'
import '../styles/About.css'
import Perfil from '../assets/GuidoSeia.jpeg'

export default function About() {
  return (
    <div className='containerGral flex items-center flex-col w-full h-full'>
      <div className='about mt-3 w-full flex flex-row items-center justify-evenly'>     
              <div className=' mt-5 mb-5  text-white w-3/4 ' data-aos="flip-up" data-aos-duration="3000"> <p className='text-introduce mb-3'>{"<about me>"}</p>  
              <p className='ml-6 mt-0 mb-0 tracking-widest leading-8'>I introduce myself , Full-stack MERN developer (MongoDB, Express, React and NodeJS) graduated from the Mindhub bootcamp which offers a work plan of more than 700 hours under AGIL/SCRUM methodologies simulating a work environment in which to acquire various tools that help me They allow you to do the work of a programmer. I am also a student of the Information Systems engineering career.
              I am a young person who enjoys both working in a team and autonomously; I don't take mistakes as a failure, but as an indication of what I have to continue learning in the future.
              There is plenty of motivation, my goal is to find my first job in the IT area, I want to contribute to a company that is committed to the constant growth of its projects and employees in order to continue growing as a professional.</p>
              </div>
              <div className="avatar flex justify-evenly" 
                      data-aos="fade-up"
                      data-aos-duration="3000">
                <div className="rounded-full w-3/5">
                   <img src={Perfil}></img>
               </div>
              </div>
      </div>
      <div className='tech flex items-center justify-evenly flex-col mb-2'>
      <h2 className='techTitle' data-aos="flip-up" data-aos-duration="1000">TECHNOLOGIES</h2>
            <div className="carousel carousel-center w-xs  h-20 p-2 space-x-7 rounded-box"><font></font>
              <div className="carousel-item " data-aos="fade-left" data-aos-duration="100"><font></font>
                <img src="https://i.imgur.com/0FaVJay.png" alt="react" />              </div> <font></font>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="200"><font></font>
              <img src="https://i.imgur.com/S3mmmfw.png" alt="html" />
              </div> <font></font>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="300"><font></font>
              <img src="https://i.imgur.com/Yj7DNj8.png" alt="css" />
              </div> <font></font>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="400"><font></font>
              <img src="https://i.imgur.com/4pBXhIi.png" alt="react-native" />
              </div> <font></font>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="500"><font></font>
              <img src="https://i.imgur.com/IDFdqFJ.png" alt="javascript" />
              </div> <font></font>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="600"><font></font>
              <img src="https://i.imgur.com/AmXk8Vi.png" alt="redux" />
              </div> <font></font>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="700"><font></font>
              <img src="https://i.imgur.com/2THVOP5.png" alt="nodejs" />
              </div><font></font>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="800"><font></font>
              <img src="https://i.imgur.com/NmKQPAz.png" alt="expressjs" />
              </div>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="900"><font></font>
              <img src="https://i.imgur.com/4ggiK0U.png" alt="mongoDB" />
              </div>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="1000"><font></font>
              <img src="https://i.imgur.com/RVsMO1u.png" alt="git" />
              </div>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="1100"><font></font>
              <img src="https://i.imgur.com/u1cm4oO.png" alt="github" />
              </div>
              <div className="carousel-item" data-aos="fade-left" data-aos-duration="1200"><font></font>
                <img src="https://i.imgur.com/my2LijG.png" alt="bootstrap" />
              </div>             
           </div>
           <p className='text-introduce text-left w-full'>{"</about me>"}</p>
      </div>
    
    </div>
  )
}
