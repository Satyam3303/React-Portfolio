import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.jpg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faArchive } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

const email = 'mailto:shivamsatyam209@gmail.com';

const Sidebar = () => (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logosubtitle" />
        </Link>
        <nav>
            <NavLink exat="true" 
            activeclassname="active" 
            to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>

            <NavLink exat="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>

            <NavLink exat="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>

            <NavLink exat="true" 
            activeclassname="active" 
            className="project-link" 
            to="/project">
                <FontAwesomeIcon icon={faArchive} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href="https://www.linkedin.com/in/shivam-satyam3303/">
                <FontAwesomeIcon icon ={faLinkedin} color ="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href="https://github.com/Satyam3303">
                <FontAwesomeIcon icon ={faGithub} color ="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href={`mailto:${email}`}>
                <FontAwesomeIcon icon ={faEnvelope} color ="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar