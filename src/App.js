import Navbar from './Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
  <><Navbar />
  <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
  </>
  )
}

export default App;