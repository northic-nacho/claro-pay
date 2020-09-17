import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import SectionDescription from '../../Components/SectionDescription';
import Icons from '../../Components/Icons';
import ScreenElement from '../../Components/ScreenElement';
import Image from '../../Components/Image';
import Video from '../../Components/Video';
import IPhone from '../../Components/IPhone';
import Money from '../../Components/Money';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import './styles.scss';

const IPhoneScreenContent = ({ isLowEndDevice }) => {
    if ( isLowEndDevice ) {
        return <Video id="s3" name="screen-wallet" />;
    }

    return (
        <>
            <ScreenElement
                className="icon-screen-money-icon"
                parallax="screen-wallet"
                image="gf-screen-money-icon"
            />
            <ScreenElement
                className="icon-screen-wallet"
                parallax="screen-wallet"
                image="gf-screen-wallet"
            />
            <Money />
            <ScreenElement
                className="icon-screen-check"
                parallax="screen-check-green"
                image="gf-screen-check-green"
            />
            <ScreenElement
                className="icon-screen-app-buttons"
                image="gf-screen-app-buttons"
            />
            <div className="icon-screen-circle-red" parallax="screen-circle" />
        </>
    );
};

const ThirdSection = () => {
    const { isMobileDevice, isLowEndDevice } = useDeviceDetection();

    const iphoneProps = {
        containerParallax: isMobileDevice ? null : 'slide-in-right',
        showScreenNav: isLowEndDevice ? false : 'true'
    };

    return (
        <ParallaxSection id="s3">
            <div className="content align-items-center">
                <div className="content-column content-column--left">
                    <SectionTitle>
                        <HighlightedText text="Mandá y recibí" />
                        <br />
            dinero
                    </SectionTitle>
                    <SectionDescription>
                        <p className="description-copy">
              con tus amigos, a cuentas Claro Pay, a otras Billeteras Virtuales
              o a cualquier banco de manera <b>simple y segura.</b>
                        </p>
                    </SectionDescription>
                    <ArrowButton to="#s4" />
                </div>
                <div className="content-column content-column--right">
                    <IPhone className="iphone-s4" showScreen {...iphoneProps}>
                        <IPhoneScreenContent isLowEndDevice={isLowEndDevice} />
                    </IPhone>
                    <Image
                        image="gf-big-bill"
                        className="icon-big-bill"
                        parallax="bill-slide-in-top"
                    />
                    <div className="icon-circle-white" parallax="zoom-in:shift(10%)" />
                    <Image image="gf-moare-right" className="icon-moare-right" />
                </div>
            </div>
            <Image className="icon-shield-grey" image="gf-shield-grey" />
            <Icons.Bars color="grey" />
            <Image className="icon-money-grey" image="gf-money-grey" />
            <Image className="icon-money-white" image="gf-money-white" />
            <Image className="icon-check-green hide-in-mobile" image="gf-check-green" />
            <Icons.Dash color="grey" />
            <Icons.Plus color="green" />
            <Icons.Plus color="white" />
            {isMobileDevice ? (
                ''
            ) : (
                <div className="icon-circle-red" parallax="zoom-in zoom-in:reverse" />
            )}
        </ParallaxSection>
    );
};

export default ThirdSection;
