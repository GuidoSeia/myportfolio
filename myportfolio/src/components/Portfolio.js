import React from 'react'
import '../styles/Portfolio.css'

export default function Portfolio() {

  const WebProjects=[
    

    {
      name:"My Tinerary",
      video: "https://i.imgur.com/2FejQqn.mp4",
      github: "https://github.com/GuidoSeia/mytinerary-react"
    },


    {
      name:"The Salty",
      video: "https://i.imgur.com/svw2JXn.mp4",
      github: "https://github.com/GuidoSeia/ecommerce-thesalty-frontend"
    },

    {
      name:"Amazing Events",
      video: "https://i.imgur.com/Ih2taJ8.mp4",
      github: "https://github.com/GuidoSeia/amazingEvents-JS"
    },
    
  ]


  const MobileProjects=[

    {
      name:"My Tinerary",
      video: "",
      github: "https://github.com/GuidoSeia/mytinerary-reactnative"
    },

    {
      name:"The Salty",
      video: "",
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
          <p className='text-introduce  mb-4'><br />{"<"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>{">"}</p>  
        </div>

      <div className='flex ml-10' >

      {WebProjects.map(web =>
        <div className="card shadow-xl image-full flex items-end justify-center" data-aos="fade-up" data-aos-duration="1000">
          <figure><video src={web.video} className='video-portfolio' alt="Shoes" autoPlay loop muted /></figure>
          <div className="card-body flex items-center flex-wrap justify-evenly ">
            <h2 className="card-title text-center text-white ">{web.name}</h2>
            <a href={web.github}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          </a>
            <a href='www.youtube.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" fill="white" className="bi bi-display" viewBox="0 0 16 16">
              <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
            </svg>
            </a>
          </div>
        </div>

      )}
      </div>              
        
        <div className='w-full flex'>
          <p className='text-introduce flex flex-col'><br />{"</"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>{">"}</p>  
        </div>

        <div className='w-full'>
          <p className='text-introduce  mb-4'><br />{"<"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>{">"}</p>  
        </div>

        <div className='flex ml-10 w-full items-center justify-center' >

      {MobileProjects.map(mobile =>
        <div className="card shadow-xl image-full flex items-end justify-center" data-aos="fade-up" data-aos-duration="1000">
          <figure><video src={mobile.video} alt="Shoes" autoPlay loop muted /></figure>
          <div className="card-body flex items-center flex-wrap justify-evenly ">
            <h2 className="card-title text-center text-white ">{mobile.name}</h2>
            <a href={mobile.github}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          </a>
            <a href='www.youtube.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" fill="white" className="bi bi-display" viewBox="0 0 16 16">
              <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
            </svg>
            </a>
          </div>
        </div>

      )}
      </div>             

        <div className='w-full'>
          <p className='text-introduce '><br /> {"</"}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className ="bi bi-phone" viewBox="0 0 16 16">
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

