/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';

interface NavBarProps {
  isOnLastSection: boolean;
}

const NavBar = ({ isOnLastSection }: NavBarProps ) => {
    let navBarClassName =
    'navbar navbar-expand-lg navbar-light navbar--claropay ';
    navBarClassName += isOnLastSection ? 'navbar--transparent' : 'navbar--white';

    return (
        <nav className={navBarClassName}>
            <a className="navbar-brand" href="#">
                <img
                    id="logoHeader"
                    src={
                        isOnLastSection
                            ? 'images/logo-claropay-header-white.png'
                            : 'images/logo-claropay-header.png'
                    }
                    srcSet={
                        isOnLastSection
                            ? 'images/logo-claropay-header-white@2x.png 2x'
                            : 'images/logo-claropay-header@2x.png 2x'
                    }
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
    );
};

export default NavBar;
