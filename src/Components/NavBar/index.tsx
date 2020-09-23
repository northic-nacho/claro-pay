/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';

interface NavBarProps {
    isOnLastSection: boolean;
    triggerSsoCircleAnimation: boolean;
    activateSso: Function;
}

const NavBar = ({ isOnLastSection, triggerSsoCircleAnimation, activateSso }: NavBarProps ) => {
    let navBarClassName =
    'navbar navbar-expand-lg navbar-light navbar--claropay ';
    navBarClassName += isOnLastSection ? 'navbar--transparent' : 'navbar--white';

    let ssoCircleClassName = 'sso-circle ';
    ssoCircleClassName += triggerSsoCircleAnimation ? 'active' : '';

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
                        onClick={() => activateSso( true )}
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
