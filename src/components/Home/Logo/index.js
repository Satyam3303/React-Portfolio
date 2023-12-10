import { useRef, useEffect } from 'react'
import LogoS from '../../../assets/images/logo-s.jpg'
import Profile from '../../../assets/images/Shivam_profile.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    const solidLogo = solidLogoRef.current;

    const handleMouseEnter = () => {
      solidLogo.style.animation = 'wipeOut 0.5s forwards';
    };

    const handleMouseLeave = () => {
      solidLogo.style.animation = 'wipeIn 0.5s forwards';
    };

    const solidLogo3 = bgRef.current.querySelector('.solid-logo3');
    solidLogo3.addEventListener('mouseenter', handleMouseEnter);
    solidLogo3.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      solidLogo3.removeEventListener('mouseenter', handleMouseEnter);
      solidLogo3.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
    <div className="logo-container" ref={bgRef}>
      <div className='solid-logo3'></div>
      <img
        className="solid-logo2"
        ref={solidLogoRef}
        src={LogoS}
        
        alt="  Developer"
      />
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={Profile}
        alt="  Developer"
      />
    </div>
    </>
  )
}

export default Logo
