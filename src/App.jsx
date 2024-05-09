import './App.css'
import { lazy } from 'react'
import Home from './pages/Home'
const Contact = lazy(() => import('./pages/Contact'))
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Jobs = lazy(() => import('./pages/Jobs'))


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Kontakt' element={<Contact/>}/>
          <Route path='/karriar' element={<Jobs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
