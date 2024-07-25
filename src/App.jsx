import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import personalPhoto from '/pfp.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="flex-container">
    <div className="intro">
      <h1 className="text">Hi! My name is Shani Su. </h1>
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
