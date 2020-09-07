import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import SectionDescription from '../../Components/SectionDescription';
import IPhone from '../../Components/IPhone';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import './styles.scss';
import Icons from '../../Components/Icons';
import Image from '../../Components/Image';
import Video from '../../Components/Video';
import ScreenElement from '../../Components/ScreenElement';

const IPhoneScreenContent = ({ isLowEndDevice }) => {
    if ( isLowEndDevice ) {
        return <Video id="s4" name="screen-services" />;
    }

    return (
        <>
            <div className="screen-services-container" parallax="ribbon-services">
                <ScreenElement
                    className="icon__screen-service-01 icon__screen-service-circle"
                    image="gf-screen-service-01"
                />
                <ScreenElement className="icon__screen-ribbon" image="gf-screen-ribbon" />
                <ScreenElement
                    className="icon__screen-service-plus-white-01"
                    image="gf-screen-service-plus-white"
                />
                <ScreenElement
                    className="icon__screen-service-02 icon__screen-service-circle"
                    parallax="service-zoom-in:shift(0%)"
                    image="gf-screen-service-02"
                />
                <ScreenElement
                    className="icon__screen-service-plus-red-01"
                    image="gf-screen-service-plus-red"
                />
                <ScreenElement
                    className="icon__screen-service-money-white"
                    image="gf-screen-service-money-white"
                />
                <ScreenElement
                    className="icon__screen-service-03 icon__screen-service-circle"
                    parallax="service-zoom-in:shift(0%)"
                    image="gf-screen-service-03"
                />
                <ScreenElement
                    className="icon__screen-service-plus-red-02"
                    image="gf-screen-service-plus-red"
                />
                <ScreenElement
                    className="icon__screen-service-points-white"
                    image="gf-screen-service-points-white"
                />
                <ScreenElement
                    className="icon__screen-service-04 icon__screen-service-circle"
                    parallax="service-zoom-in:shift(0%)"
                    image="gf-screen-service-04"
                />
                <ScreenElement
                    className="icon__screen-service-points-white"
                    image="gf-screen-service-points-white"
                />
                <ScreenElement
                    className="icon__screen-service-plus-red-03"
                    image="gf-screen-service-plus-red"
                />
                <ScreenElement
                    className="icon__screen-service-05 icon__screen-service-circle"
                    image="gf-screen-service-05"
                    parallax="service-zoom-in:shift(0%)"
                />
                <ScreenElement
                    className="icon__screen-service-points-white"
                    image="gf-screen-service-points-white"
                />
                <ScreenElement
                    className="icon__screen-service-06 icon__screen-service-circle"
                    parallax="service-zoom-in:shift(0%)"
                    image="gf-screen-service-06"
                />
                <ScreenElement
                    className="icon__screen-service-points-white"
                    image="gf-screen-service-points-white"
                />
                <ScreenElement
                    className="icon__screen-service-plus-red-04"
                    image="gf-screen-service-plus-red"
                />
                <ScreenElement
                    className="icon__screen-service-07 icon__screen-service-circle"
                    image="gf-screen-service-07"
                    parallax="service-zoom-in:shift(0%)"
                />
                <ScreenElement
                    className="icon__screen-service-plus-red-05"
                    image="gf-screen-service-plus-red"
                />
                <ScreenElement
                    className="icon__screen-service-plus-red-06"
                    image="gf-screen-service-plus-red"
                />
                <ScreenElement
                    className="icon__screen-service-08"
                    parallax="service-zoom-in:shift(0%)"
                    image="gf-screen-service-08"
                />
            </div>
            <ScreenElement
                className="icon__screen-app-buttons"
                image="gf-screen-app-buttons"
            />
            <div className="icon__screen-circle-red" />
        </>
    );
};

const FourthSection = () => {
    const { isMobileDevice, isLowEndDevice } = useDeviceDetection();

    const iphoneProps = {
        containerParallax: isMobileDevice ? null : 'slide-in-left',
        showScreenNav: isLowEndDevice ? false : 'true'
    };

    const greyCircleProps = {
        parallax: isMobileDevice ? null : 'zoom-in zoom-in:reverse'
    };

    return (
        <ParallaxSection id="s4">
            <div className="content align-items-center">
                <div className="content__column content__column--left">
                    <IPhone className="iphone-s4" showScreen {...iphoneProps}>
                        <IPhoneScreenContent isLowEndDevice={isLowEndDevice} />
                    </IPhone>
                    <div className="icon__circle-grey" {...greyCircleProps} />
                </div>
                <div className="content__column content__column--right">
                    <SectionTitle>
                        <HighlightedText
                            text="Pagá"
                            containerClassName="highlight--first"
                            effect="reveal-left-in:shift(-30%)"
                        />{' '}
            todas tus facturas y{' '}
                        <HighlightedText text="recargá" containerClassName="highlight--second" /> tus
            servicios
                    </SectionTitle>
                    <SectionDescription>
                        <p className="description__copy">
                            <b>Luz, Agua, Gas, Internet...</b>
                            <br />
              lo que necesites sin hacer filas <br />
              ni moverte de tu casa.
                        </p>
                    </SectionDescription>
                    <ArrowButton to="#s5" />
                </div>
            </div>
            <Icons.Plus color="green" />
            <Image className="icon__money-grey" image="gf-money-grey" />
            {isMobileDevice ? (
                ''
            ) : (
                <Image className="icon__ticket-green" image="gf-ticket-green" />
            )}
            <Image className="icon__bill-green" image="gf-bill-green" />
            <Image className="icon__money-grey-2" image="gf-money-grey" />
            <Icons.Dash color="grey" />
        </ParallaxSection>
    );
};

export default FourthSection;
