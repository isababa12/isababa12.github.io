// import LogoTitle from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react';
import './home.scss';
import Portfolio from './Portfolio/portfolio';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=[' ','I','s','a','i','a','h',' ','L','i','n']
    const jobArray = ['F','u','l','l',' ','S','t','a','c','k',' ','S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5300)
    }, [])

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={`${letterClass} _11`}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={26}
                />
                </h1>
                <h2> Python | JavaScript | Express | React | Node | Django | MongoDB | SQL </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                <a href='https://drive.google.com/file/d/15T2UuvwClYGBFyVkqqcqaQ1PXIdKOOhp/view?usp=sharing' target="_blank" className='flat-button-2'>VIEW MY RESUME</a>
            </div>
            <Portfolio />
        </div>
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )

}

export default Home
