import './App.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom"
import NoMatch from './pages/NoMatch/NoMatch'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cotiza from './pages/Cotiza/Cotiza'
import Portafolio from './pages/Portafolio/Portafolio'
import Servicios from './pages/Servicios/Servicios'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cotiza />} />
          {/* <Route path="portafolio" element={<Portafolio />} />
          <Route path="cotiza" element={<Cotiza />} />
          <Route path="about" element={<About />} />
          <Route path="servicios" element={<Servicios />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
