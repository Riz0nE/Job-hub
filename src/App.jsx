import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div>
      <Home></Home>

    </div>

  )
}

export default App
