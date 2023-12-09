import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular,faHtml5,faGit,faReact,faCss3,faBootstrap } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'



const About = () => {

const [letterClass, setLetterClass] = useState('text-animate')



useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);
},[])

    return(
        <>


        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e',]}
                    idx={15}
                />
                </h1>
                <p>I’ve been an aspiring web developer and software developer. I’m passionate about creating codes that are easy to use.</p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                <div className='face1'> <FontAwesomeIcon icon={faAngular} color="#DD0031"/></div> 
                <div className='face2'> <FontAwesomeIcon icon={faHtml5} color="#DD0031"/> </div>
                <div className='face3'> <FontAwesomeIcon icon={faGit} color="#DD0031"/> </div> 
                <div className='face4'> <FontAwesomeIcon icon={faReact} color="#DD0031"/> </div> 
                <div className='face5'> <FontAwesomeIcon icon={faCss3} color="#DD0031"/> </div> 
                <div className='face6'> <FontAwesomeIcon icon={faBootstrap} color="#DD0031"/> </div>

                </div>
            </div>

        </div>
        <Loader type='pacman' style={{zIndex:150}}/>
        </>
    )
}

export default About