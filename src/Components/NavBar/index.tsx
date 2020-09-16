/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';

interface NavBarProps {
  isOnLastSection: boolean;
}

const NavBar = ({ isOnLastSection }: NavBarProps ) => {
    const [isSsoActive, setIsSsoActive] = React.useState(false);

    let navBarClassName =
    'navbar navbar-expand-lg navbar-light navbar--claropay ';
    navBarClassName += isOnLastSection ? 'navbar--transparent' : 'navbar--white';

    let ssoCircleClassName = 'sso-circle ';
    ssoCircleClassName += isSsoActive ? 'active' : '';

    return (
        <nav className={navBarClassName}>
            <a className="navbar__brand" href="#">
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
            <div className="navbar__btn">
                <a
                    href="#"
                    className="btn btn--primary btn--signup btn--sso"
                    onClick={() => setIsSsoActive(true)}
                >
                    Entrar ahora
                </a>
                <div
                    className={ssoCircleClassName}>
                </div>
            </div>
            </form>
        </nav>
    );
};

export default NavBar;
