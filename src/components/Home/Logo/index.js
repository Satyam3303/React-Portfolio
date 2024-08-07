import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Profile from '../../../assets/images/Shivam_profile.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()
  const shakeTimelineRef = useRef(null) // Ref to control the shake timeline

  useEffect(() => {
    const solidLogo = solidLogoRef.current

    const handleMouseMove = (e) => {
      const rect = solidLogo.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(solidLogo, {
        rotationY: x / 5,
        rotationX: -y / 5,
        boxShadow: `${x / 10}px ${y / 10}px 20px rgba(0, 0, 0, 0.3)`,
        duration: 0.3,
        ease: 'power1.out',
      })
    }

    const handleMouseEnter = () => {
      // Create a new timeline and store it in the ref
      shakeTimelineRef.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
        .to(solidLogo, { rotationZ: 20, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: -20, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: 15, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: -15, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: 10, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: -10, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: 5, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: -5, duration: 0.1, ease: 'power1.inOut' })
        .to(solidLogo, { rotationZ: 0, duration: 0.1, ease: 'power1.inOut' })
    }

    const handleMouseLeave = () => {
      if (shakeTimelineRef.current) {
        shakeTimelineRef.current.kill() 
      }
      gsap.to(solidLogo, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
        duration: 0.5,
        ease: 'power1.out',
      })
    }

    solidLogo.addEventListener('mousemove', handleMouseMove)
    solidLogo.addEventListener('mouseenter', handleMouseEnter)
    solidLogo.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      solidLogo.removeEventListener('mousemove', handleMouseMove)
      solidLogo.removeEventListener('mouseenter', handleMouseEnter)
      solidLogo.removeEventListener('mouseleave', handleMouseLeave)
      if (shakeTimelineRef.current) {
        shakeTimelineRef.current.kill() 
      }
    }
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={Profile}
        alt="Developer"
      />
    </div>
  )
}

export default Logo
