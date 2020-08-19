import React from 'react';
import './styles.scss';

interface LoaderProps {
    appReady: boolean;
}

const Loader = ({ appReady }: LoaderProps ) => {
    if ( !appReady )
        return (
            <div className="loading">
                <div className="loading__container">
                    <img
                        src="images/logo-claropay-header.png"
                        srcSet="images/logo-claropay-header@2x.png 2x"
                        alt="Claro Pay"
                    />
                    <br />
                    <img className="loading__gif" alt="" src="images/loading.gif" />
                </div>
            </div>
        );

    return null;
};

export default Loader;
