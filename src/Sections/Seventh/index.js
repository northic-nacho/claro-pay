import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import SectionDescription from '../../Components/SectionDescription';
import IPhone from '../../Components/IPhone';
import ScreenElement from '../../Components/ScreenElement';
import Image from '../../Components/Image';
import Video from '../../Components/Video';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import './styles.scss';

const IPhoneScreenContent = ({ isLowEndDevice }) => {
    if ( isLowEndDevice ) {
        return <Video id="s7" name="screen-notification" />;
    }

    return (
        <>
            <div className="notification-container">
                <img
                    parallax="notification-btn"
                    className="notification-btn"
                    src="images/gf-notification-btn.png"
                    srcSet="images/gf-notification-btn@2x.png 2x"
                    alt=""
                />
            </div>
            <div className="notification-container-mobile">
                <img
                    parallax="notification-btn-mobile"
                    className="notification-btn-mobile"
                    src="images/gf-notification-btn.png"
                    srcSet="images/gf-notification-btn@2x.png 2x"
                    alt=""
                />
            </div>
            <ScreenElement
                className="icon__screen-app-buttons"
                image="gf-screen-app-buttons"
            />
        </>
    );
};

const SeventhSection = () => {
    const { isMobileDevice, isLowEndDevice } = useDeviceDetection();

    const iphoneProps = {
        screenParallax: isLowEndDevice ? null : 'iphone-screen-notification',
        showScreenNav: !isLowEndDevice
    };

    return (
        <ParallaxSection id="s7">
            <div parallax="anim-stage">
                <div className="content align-items-center">
                    <div className="content__column content__column--left">
                        <SectionTitle>
              Recargá
                            <br />
              con{' '}
                            <HighlightedText
                                text="descuentos"
                                containerClassName="highlight--first"
                                effect="reveal-left-in:shift(-30%)"
                            />
                            <br />
                            <HighlightedText text="exclusivos" containerClassName="highlight--second " />
                        </SectionTitle>
                        <SectionDescription>
                            <p className="description__copy">
                Recibí <b>alertas con descuentos</b>
                                <br />
                para tu línea Claro
                            </p>
                        </SectionDescription>
                        <ArrowButton to="#s8" />
                    </div>
                    <div className="content__column content__column--right">
                        <IPhone className="iphone-s4" showScreen {...iphoneProps}>
                            <IPhoneScreenContent isLowEndDevice={isLowEndDevice} />
                        </IPhone>
                        <Image className="icon__moare-right" image="gf-moare-grey" />
                        {isMobileDevice ? (
                            ''
                        ) : (
                            <div className="icon__circle-green" parallax="zoom-in:shift(10%)" />
                        )}
                    </div>
                </div>
            </div>
        </ParallaxSection>
    );
};

export default SeventhSection;
