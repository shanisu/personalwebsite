import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import personalPhoto from '/pfp.jpg'
import './App.css'
import linkicon from '/linkedin_icon.png'
import githubIcon from '/github_icon.png'
import emailIcon from '/email_icon.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <nav className="navbar">
    <div className="navbar-logo">Shani Su</div>
      <ul className="navbar-links">
      <li className="homebutton"><a href="#home">Home</a></li>
      <li className="aboutbutton"><a href="#about">About</a></li>
      <li className="projbutton"><a href="#projects">Projects</a></li>
      <li className="contactbutton"><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <div className="flex-container">
    <div className="intro">
      <div className="arrange">
        <h1 className="text">Hi! My name is Shani Su. </h1>
        <div className="icons"> 
          <a href="http://www.linkedin.com/in/shanisu" target="_blank" rel="noopener noreferrer">
            <img src={linkicon} alt="LinkedIn" className="icon"/>
          </a>
          <a href=" https://github.com/shanisu" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon"/>
          </a>
          <a href="mailto:shanisu0711@gmail.com">
            <img src={emailIcon} alt="Email" className="icon"/>
          </a>
         </div>
      </div>
      <img src={personalPhoto} className="pfp"/>
    </div>

    {/* <div className="love">
    { <button onClick={() => setCount((count) => count + 1)}>
      marc's love is {count} ❤️
    </button> }
    </div> */}
  </div>


  <div className="me">
    <h1> 
      I am currently a student at Stanford University majoring in computer science. I am a curious individual who is alwyas eager to learn new things. When I'm not exploring new ideas, I enjoy baking and playing the piano/guitar. I love making fresh, warm cookies and sharing with friends and family!
    </h1>
  </div>

  
    </>
  )
}

export default App
