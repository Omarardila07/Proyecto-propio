import './App.css'
import Home from './Screens/home'
import Contact from './Screens/Contact'
import About from './Screens/AboutUs'
import Pages from './Screens/Pages'
import NavBar from './components/navbar'
import { BrowserRouter as  Router, Routes, Route, BrowserRouter }  from 'react-router-dom'

function App() {
  return (
    <>
      <div className="flex flex-col">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/page' element={<Pages />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App