import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/src/assets/logo/logotipo-yustidesigner-04.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center">
              <Link to='/' className="nav-link">Inicio</Link>
              {/* <Link to='/about' className="nav-link">About</Link>
              <Link to='/servicios' className="nav-link">Servicios</Link>
              <Link to='/portafolio' className="nav-link" href="#">Portafolio</Link>
              <Link to='/cotiza' className="nav-link">Cotiza / Contacto</Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header