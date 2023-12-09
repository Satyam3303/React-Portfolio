import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S','h','i','v','a','m']
    const jobArray = ['An', ' ' ,'Aspiring', ' ', 'Fullstack',' ', 'Delevopler']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    },[])


    return( 
        <>

        <div className="container home-page">
            <div className="text-zone">

                <h1>
                <span className={letterClass}>H</span>   
                <span className={`${letterClass} _12`}>i,</span> 
                <br/>
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <span className={`${letterClass} _14`}> </span> 
                <AnimatedLetters letterClass ={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>

                <h2>FullStack Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo />
           
        </div>
        <Loader type='pacman' style={{zIndex:150}}/>

        </>
    )
}

export default Home