import './logo.scss';
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import { gsap } from 'gsap-trial';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef=useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20
            })
            gsap.fromTo(
                solidLogoRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    delay:3,
                    duration: 2,
                }
            )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS}/>
        </div>
    )
}

export default Logo
