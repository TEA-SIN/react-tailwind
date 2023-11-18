import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarCmp from './components/header/NavbarCmp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        {/* NavBar */}
        <NavbarCmp/>
      </header>
      <main className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500"></main>
    </> 
  )
}

export default App
