import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss';

import Loader from 'react-loaders';


const Projects = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M','y']
    const jobArray = ['P','R','O','J','E','C','T','S']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    },[])
  return (
    <>

        <div className="container project-page">
            <div className="text-zone">

            

                <h1>
                <span className={letterClass}>S</span>   
                <span className={`${letterClass} _12`}>o</span> 
                <span className={`${letterClass} _13`}>m</span> 
                <span className={`${letterClass} _14`}>e</span> 
                <span className={`${letterClass} _14`}> </span> 
                <span className={`${letterClass} _14`}>O</span> 
                <span className={`${letterClass} _14`}>f</span>
                <span className={`${letterClass} _14`}> </span> 
                <AnimatedLetters letterClass ={letterClass}
                strArray={nameArray}
                idx={15} />
                <span className={`${letterClass} _14`}> </span> 
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>


                <div className="link-list">
                <Link to="https://github.com/Satyam3303/Covid-19-Vaccine-Portal" className='flat-button'>Link</Link>
                <Link to="https://github.com/Satyam3303/REACT-Calculator" className='flat-button'>Link</Link>
                <Link to="https://github.com/Satyam3303/Android-Music-Player" className='flat-button'>Link</Link>
                <Link to="https://github.com/aditya-2403/Capstone-Project" className='flat-button'>Link</Link>
                <Link to="https://github.com/Satyam3303/Snake-Game-In-React" className='flat-button'>Link</Link>
                <Link to="https://github.com/Satyam3303/Python-Encrypter-Decrypter-With-Cam" className='flat-button'>Link</Link>
                <Link to="https://github.com/Satyam3303/Tic-Tac-Toe" className='flat-button'>Link</Link>
                <Link to="https://github.com/Satyam3303/WindowsXpSimulator" className='flat-button'>Link</Link>
                <Link to="https://github.com/Satyam3303/Attendance-System-Using-Facial-Recognition" className='flat-button'>Link</Link>
                </div>

                <div className="for-phone">
                <Link to="https://github.com/Satyam3303/Covid-19-Vaccine-Portal" className='flat-button'>COVID 19 Vaccination Portal</Link>
                <Link to="https://github.com/Satyam3303/REACT-Calculator" className='flat-button'>REACT Calculator</Link>
                <Link to="https://github.com/Satyam3303/Android-Music-Player" className='flat-button'>Android Music Player</Link>
                <Link to="https://github.com/aditya-2403/Capstone-Project" className='flat-button'>JS Multiplayer Online Game</Link>
                <Link to="https://github.com/Satyam3303/Snake-Game-In-React" className='flat-button'>Snake Game in REACT</Link>
                <Link to="https://github.com/Satyam3303/Python-Encrypter-Decrypter-With-Cam" className='flat-button'>Encryptor And Decryptor(Python)</Link>
                <Link to="https://github.com/Satyam3303/Tic-Tac-Toe" className='flat-button'>Tic Tac Toe(Python)</Link>
                <Link to="https://github.com/Satyam3303/WindowsXpSimulator" className='flat-button'>Windows Xp Simulator</Link>
                <Link to="https://github.com/Satyam3303/Attendance-System-Using-Facial-Recognition" className='flat-button'>Attendance Using Facial Recog</Link>
                </div>


                

                <div className="project-list">
                <div className='flat-button'>COVID 19 Vaccination Portal</div>
                <div className='flat-button'>REACT Calculator</div>
                <div className='flat-button'>Android Music Player</div>
                <div className='flat-button'>Javascript Based Multiplayer Online Game</div>
                <div className='flat-button'>Snake Game in REACT</div>
                <div className='flat-button'>Encryptor And Decryptor(Python)</div>
                <div className='flat-button'>Tic Tac Toe(Python)</div>
                <div className='flat-button'>Windows Xp Simulator</div>
                <div className='flat-button'>Attendance System Using Facial Recognition</div>
                </div>
            </div>
            
        </div>
        <Loader type='pacman'/>

        </>
  )
}

export default Projects
