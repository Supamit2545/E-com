import { useState } from 'react'
import './App.css'
import Topnav from './Components/topnav/Topnav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <Topnav/>
      </div>
    </>
  )
}

export default App
