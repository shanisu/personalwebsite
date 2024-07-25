import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import personalPhoto from '/pfp.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div class="flex-container">
    <div className="intro">
      <h1>Hi! My name is Shani Su. </h1>
    </div>
    <div>
      <img src={personalPhoto} className="pfp"/>
    </div>
  </div>

    <div className="love">
        <button onClick={() => setCount((count) => count + 1)}>
          marc's love is {count} ❤️
        </button>
      </div>
    </>
  )
}

export default App
