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
                className="icon__screen-money-icon"
                parallax="screen-wallet"
                image="gf-screen-money-icon"
            />
            <ScreenElement
                className="icon__screen-wallet"
                parallax="screen-wallet"
                image="gf-screen-wallet"
            />
            <Money />
            <ScreenElement
                className="icon__screen-check"
                parallax="screen-check-green"
                image="gf-screen-check-green"
            />
            <ScreenElement
                className="icon__screen-app-buttons"
                image="gf-screen-app-buttons"
            />
            <div className="icon__screen-circle-red" parallax="screen-circle" />
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
                <div className="content__column content__column--left">
                    <SectionTitle>
                        <HighlightedText text="Mandá y recibí" />
                        <br />
            dinero
                    </SectionTitle>
                    <SectionDescription>
                        <p className="description__copy">
              con tus amigos, a cuentas Claro Pay, a otras Billeteras Virtuales
              o a cualquier banco de manera <b>simple y segura.</b>
                        </p>
                    </SectionDescription>
                    <ArrowButton to="#s4" />
                </div>
                <div className="content__column content__column--right">
                    <IPhone className="iphone-s4" showScreen {...iphoneProps}>
                        <IPhoneScreenContent isLowEndDevice={isLowEndDevice} />
                    </IPhone>
                    <Image
                        image="gf-big-bill"
                        className="icon__big-bill"
                        parallax="bill-slide-in-top"
                    />
                    <div className="icon__circle-white" parallax="zoom-in:shift(10%)" />
                    <Image image="gf-moare-right" className="icon__moare-right" />
                </div>
            </div>
            <Image className="icon__shield-green" image="gf-shield-green" />
            <Icons.Bars color="grey" />
            <Image className="icon__money-grey" image="gf-money-grey" />
            <Image className="icon__money-white" image="gf-money-white" />
            <Image className="icon__check-green hide-in-mobile" image="gf-check-green" />
            <Icons.Dash color="grey" />
            <Icons.Plus color="green" />
            <Icons.Plus color="white" />
            {isMobileDevice ? (
                ''
            ) : (
                <div className="icon__circle-green" parallax="zoom-in zoom-in:reverse" />
            )}
        </ParallaxSection>
    );
};

export default ThirdSection;
