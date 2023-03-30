import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Logo from './Logo/logo.js'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/animatedLetters.js'
import './contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_9tmp9c8', 'template_2fm9vcg', form.current, 'huudwBRKnfT4wgniQ')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am open to work! I am a US Citizen. Please contact me if you have any opportunites that are Remote or are in the Los Angeles or Orange County areas. I am also willing to travel for Hybrid opportunities or relocate to some areas.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Logo />
        <div className="info-map">
          Isaiah Lin
          <br />
          Los Angeles, California
          <br />
          <a href="tel:+15626314276">+1 (562) 631-4276</a>
          <br/>
          <a href="mailto:isababa12@gmail.com">isababa12@gmail.com</a>
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse" />
    </>
  )
}

export default Contact
