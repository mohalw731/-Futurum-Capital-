import './App.css'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Contact from './pages/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



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
