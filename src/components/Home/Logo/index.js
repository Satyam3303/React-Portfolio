import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()
  const borderz = useRef()
  const borderz2 = useRef()
  const borderz3= useRef()
  const borderz4 = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

      gsap.fromTo(
        borderz.current,
        {
          opacity: 0,
          x: -400,
        },
        {
          opacity: 1,
          delay: 5,
          duration: 4,
          x: 0,
        }
      )

      gsap.fromTo(
        borderz2.current,
        {
          opacity: 0,
          x: 400,
        },
        {
          opacity: 1,
          delay: 5,
          duration: 4,
          x: 0,
        }
      )

      gsap.fromTo(
        borderz3.current,
        {
          opacity: 0,
          y: -400,
        },
        {
          opacity: 1,
          delay: 5,
          duration: 4,
          y: 0,
        }
      )

      gsap.fromTo(
        borderz4.current,
        {
          opacity: 0,
          y: 400,
        },
        {
          opacity: 1,
          delay: 5,
          duration: 4,
          y: 0,
          borderradius: 25
        }
      )
           
      

      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
          
        },
        {
          opacity: 1,
          delay: 4,
          duration: 1,
        }
      )
  }, 
  [])

  return (
    <div className="logo-container" ref={bgRef}>
     
     <div className="borderz" ref={borderz}></div>
     <div className="borderz" ref={borderz2}></div>
     <div className="borderz2" ref={borderz3}></div>
     <div className="borderz2" ref={borderz4}></div>

      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="  Developer"
      />

    

     
    </div>

    
  )
}

export default Logo
