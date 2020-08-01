import React from 'react'
import './styles.scss';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-claropay">
      <a className="navbar-brand" href="#">
        <img
          id="logoHeader"
          src="images/logo-claropay-header.png"
          srcSet="images/logo-claropay-header@2x.png 2x"
          alt="Claro Pay"
        />
      </a>
      <form className="form-inline ml-auto">
        <a href="#" className="btn btn-primary btn-signup">
          Creá tu cuenta
        </a>
        <a href="#" className="btn btn-link-black btn-login">
          Entrá ahora
        </a>
        <a href="#" className="btn btn-primary btn-signup-mobile">
          Entrá ahora
        </a>
      </form>
    </nav>
  )
}

export default NavBar
