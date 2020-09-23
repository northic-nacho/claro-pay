/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import '../extended-html.d.ts';
import './styles.scss';

interface SingeSignOnProps {
    closeSso: Function;
}

interface SSOProps {
    setOption: Function;
}

const SSO = ({ setOption }: SSOProps) => (
    <>
        <a
            className="btn"
            onClick={() => setOption( 'log-in' )}
        >Ingresar</a>
        <a
            className="btn btn-outline"
            onClick={() => setOption( 'sign-up' )}
        >
            Crear tu Usuario Claro
        </a>
        <p className="red-text">Para usar en Claro Pay y Mi Claro</p>
    </>
);

const LogIn = () => (
    <>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
            <img src="images/icon-pass.png" srcSet="images/icon-pass@2x.png 2x" className="icon"></img>
        </div>
        <a href="#" className="btn">Ingresar</a>
    </>
);

const SignUp = () => (
    <>
        <div className="form-group">
            <input
                type="email" className="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="name@example.com"
            >
            </input>
            <img src="images/icon-email.png" srcSet="images/icon-email@2x.png 2x" className="icon"></img>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="exampleInputName1" placeholder="Nombre de usuario"></input>
            <img src="images/icon-user.png" srcSet="images/icon-user@2x.png 2x" className="icon"></img>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
            <img src="images/icon-pass.png" srcSet="images/icon-pass@2x.png 2x" className="icon"></img>
        </div>
        <a href="#" className="btn">Crear Usuario Claro</a>
    </>
);

const SingeSignOn = ({ closeSso }: SingeSignOnProps ) => {
    const [ darkMode, setDarkMode ] = useState( false );
    const [ option, setOption ] = useState( null );
    return (
        <div className={`page-sso active ${darkMode ? 'dark-theme' : 'red-theme'}`}>
            <div className="navbar">
                <div className="brand">
                    <a href="#"><img src="images/logo-claro-white-footer.png" srcSet="images/logo-claro-white-footer@2x.png 2x" alt=""></img></a>
                </div>
                <form className="form-inline ml-auto">
                    <div
                        className="btn btn-close"
                        onClick={() => closeSso( false )}
                    >Volver</div>
                </form>
            </div>
            <div className="content-wrapper">
                <div className="login-container fade-in-bottom">
                    <h1 className="welcome-title">Hola!</h1>
                    <div className="form-container">
                        { !option && <SSO setOption={setOption} /> }
                        { option && option === 'log-in' && <LogIn /> }
                        { option && option === 'sign-up' && <SignUp /> }
                    </div>
                </div>
            </div>
            <div className="sso-footer">
                <div className="toggle-custom">
                    <input type="checkbox" id="theme-switch"></input>
                    <label
                        htmlFor="theme-switch"
                        onClick={() => setDarkMode( !darkMode )}
                    ></label>
                </div>
                <div>
                    <a href="#" className="footer-btn"><img src="images/icon-info-white-xs.png" srcSet="images/icon-info-white-xs@2x.png 2x" alt="Consejos"></img> Consejos útiles</a>
                    <a href="#" className="footer-btn"><img src="images/icon-chat-white-xs.png" srcSet="images/icon-chat-white-xs@2x.png 2x" alt="Chat"></img> Chat en línea</a>
                </div>
            </div>
        </div>
    );
};

export default SingeSignOn;
