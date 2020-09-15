import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import SectionDescription from '../../Components/SectionDescription';
import Icons from '../../Components/Icons';
import ScreenElement from '../../Components/ScreenElement';
import IPhone from '../../Components/IPhone';
import Image from '../../Components/Image';
import Video from '../../Components/Video';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import './styles.scss';

const IPhoneScreenContent = ({ isLowEndDevice }) => {
    if ( isLowEndDevice ) {
        return <Video id="s5" name="screen-sube" />;
    }

    return (
        <>
            <ScreenElement
                parallax="sube-outline-front"
                className="icon-screen-sube-outline-front"
                image="gf-screen-sube-outline"
            />
            <ScreenElement
                parallax="sube-outline-front-mobile"
                className="icon-screen-sube-outline-front-mobile"
                image="gf-screen-sube-outline"
            />
            <ScreenElement
                className="icon-screen-app-buttons"
                image="gf-screen-app-buttons"
            />
        </>
    );
};

const FifthSection = () => {
    const { isMobileDevice, isLowEndDevice } = useDeviceDetection();

    const iphoneProps = {
        containerParallax: isMobileDevice ? null : 'slide-in-right',
        showScreenNav: isLowEndDevice ? false : 'true'
    };

    return (
        <ParallaxSection id="s5">
            <div className="content align-items-center">
                <div className="content-column content-column--left">
                    <SectionTitle>
                        <HighlightedText text="Movete" /> en todo momento, sin obstáculos
                    </SectionTitle>
                    <SectionDescription>
                        <p className="description-copy">
              Podés cargar tu tarjeta <b>Sube</b>
                            <br />
              cuando lo necesites,
                            <br />
                            <b>estés donde estés.</b>
                        </p>
                    </SectionDescription>
                    <ArrowButton to="#s6" />
                </div>
                <div className="content-column content-column--right">
                    {!isLowEndDevice && (
                        <ScreenElement
                            parallax="sube-money"
                            className="icon-screen-sube-money"
                            image="gf-screen-sube-money"
                        />
                    )}
                    <IPhone className="iphone-s4" showScreen {...iphoneProps}>
                        <IPhoneScreenContent isLowEndDevice={isLowEndDevice} />
                    </IPhone>
                    {!isLowEndDevice && (
                        <>
                            <ScreenElement
                                className="icon-screen-sube-outline-back"
                                parallax="sube-outline-back"
                                image="gf-screen-sube-outline"
                            />
                            <ScreenElement
                                className="icon-screen-sube-outline-back-mobile"
                                parallax="sube-outline-back-mobile"
                                image="gf-screen-sube-outline"
                            />
                            <ScreenElement
                                className="icon-screen-sube-green-back"
                                parallax="sube-green-back"
                                image="gf-screen-sube-green"
                            />
                            <ScreenElement
                                className="icon-screen-sube-green-back-mobile"
                                parallax="sube-green-back-mobile"
                                image="gf-screen-sube-green"
                            />
                        </>
                    )}
                    <div className="icon-circle-grey-2" />
                    <Image className="icon-circle-bar-grey" image="gf-circle-bar-grey" />
                    <Image className="icon-moare-right" image="gf-moare-right" />
                </div>
            </div>
            <Icons.Plus color="green" iconKey={1} />
            <Icons.Plus color="green" iconKey={2} />
            <Icons.Plus color="green" iconKey={3} />
            <Image className="icon-money-grey" image="gf-money-grey" />
            <Image className="icon-house-grey hide-in-mobile" image="gf-house-grey" />
            <div className="icon-circle-grey-1" />
            <Icons.Bars color="green" />
            <Icons.GreenCircle
                animation={isLowEndDevice ? null : 'half-circle-rotation'}
            />
        </ParallaxSection>
    );
};

export default FifthSection;
