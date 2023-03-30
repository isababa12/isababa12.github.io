import './about.scss'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faDocker, faNodeJs, faPython, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={ letterClass }
                        strArray={['A','b','o','u','t',' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                My name is Isaiah Lin and I am a Full-Stack Engineer. I specialize in working with Python, JavaScript, and React. Though I have an non-traditional background, I got my start with Software Engineering with Hack Reactor's rigorous 19-week course.
                </p>
                <p>
                My experience at Hack Reactor has taught me what it takes to adapt, learn quickly, and get work done! With my propensity to excel in high pressure environments and the versatile toolset I have been taught, I am confident that I can fill any position for your needs.
                </p>
                <p>
                I am especially curious to work with UI/UX. In my group projects, I have consistently positioned myself to work with UI and UX interactions debugging React, creating wireframes, mocking up schema, and using React Hooks to create spinners and UX elements to give as much passive important information as possible to the end-user.
                </p>
            </div>
                <div className='stage-cube-cont'>
                    <div className='cube-spinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={ faReact } color ='#5ED4F4' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={ faPython } color ='#4584b6' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={ faJsSquare } color ='#f0db4f' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={ faGitAlt } color ='#f34f29' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={ faDocker } color ='#0db7ed' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={ faNodeJs } color ='#68a063' />
                        </div>
                    </div>
                </div>
        </div>
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default About
