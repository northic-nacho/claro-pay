/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
// eslint-disable jsx-a11y/anchor-is-valid
import React, { useState, useEffect } from 'react';
import jqueryParallax from './jquery.parallax';
import FirstSection from './Sections/First';
import SecondSection from './Sections/Second';
import ThirdSection from './Sections/Third';
import FourthSection from './Sections/Fourth';
import FifthSection from './Sections/Fifth';
import SixthSection from './Sections/Sixth';
import SeventhSection from './Sections/Seventh';
import EighthSection from './Sections/Eighth';
import Footer from './Components/Footer';
import Paginator from './Components/Paginator';
import NavBar from './Components/NavBar';
import SingleSignOn from './Components/SingleSignOn';

import './styles/index.scss';

function App({ setAppReady }) {
    useEffect( () => {
        jqueryParallax();
    }, [] );

    useEffect( () => {
        const setAppReadyOnPageLoad = () => {
            setAppReady( true );
        };

        window.addEventListener( 'load', setAppReadyOnPageLoad );

        return () => window.removeEventListener( 'load', setAppReadyOnPageLoad );
    }, [ setAppReady ] );

    const [ isOnLastSection, setIsOnLastSection ] = useState( false );
    const [ triggerSsoCircleAnimation, setTriggerSsoCircleAnimation ] = useState( false );
    const [ isSsoActive, setIsSsoActive ] = useState( false );

    const activateSso = () => {
        setTriggerSsoCircleAnimation( true );
        setTimeout( () => {
            setIsSsoActive( true );
        }, 500 );
    };

    const closeSso = () => {
        setTriggerSsoCircleAnimation( false );
        setIsSsoActive( false );
    };

    return (
        <div className="app-container">
            {
                isSsoActive ?
                    <>
                        <NavBar
                            isOnLastSection={isOnLastSection}
                            triggerSsoCircleAnimation={triggerSsoCircleAnimation}
                            activateSso={activateSso}
                        />
                        <SingleSignOn closeSso={closeSso} />
                    </> :
                    <>
                        <NavBar
                            isOnLastSection={isOnLastSection}
                            triggerSsoCircleAnimation={triggerSsoCircleAnimation}
                            activateSso={activateSso}
                        />
                        <FirstSection />
                        <SecondSection />
                        <ThirdSection />
                        <FourthSection />
                        <FifthSection />
                        <SixthSection />
                        <SeventhSection />
                        <EighthSection setIsOnLastSection={setIsOnLastSection} />
                        <Footer />
                        <Paginator />
                    </>
            }
        </div>
    );
}

export default App;

// eslint-enable
