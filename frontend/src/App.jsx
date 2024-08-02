import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewCourse from '../components/ViewCourse'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewCourse/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
