import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import SectionDescription from '../../Components/SectionDescription';
import Icons from '../../Components/Icons';
import IPhone from '../../Components/IPhone';
import Image from '../../Components/Image';
import Video from '../../Components/Video';
import ScreenElement from '../../Components/ScreenElement';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import './styles.scss';

const IPhoneScreenContent = ({ isLowEndDevice }) => {
    if ( isLowEndDevice ) {
        return <Video id="s6" name="screen-cards" />;
    }

    return (
        <>
            <ScreenElement
                className="icon-screen-card-in-01 icon-screen-card-in"
                parallax="credit-card-in-1"
                image="gf-screen-card-01"
            />
            <ScreenElement
                className="icon-screen-card-in-02 icon-screen-card-in"
                parallax="credit-card-in-2"
                image="gf-screen-card-02"
            />
            <ScreenElement
                className="icon-screen-card-in-03 icon-screen-card-in"
                parallax="credit-card-in-3"
                image="gf-screen-card-03"
            />
            <ScreenElement
                className="icon-screen-cards-background"
                image="gf-screen-cards-background"
            />
        </>
    );
};

const SixthSection = () => {
    const { isLowEndDevice } = useDeviceDetection();

    return (
        <ParallaxSection id="s6">
            <div className="content align-items-center">
                <div className="content-column content-column--left">
                    <IPhone className="iphone-s4" showScreen>
                        <IPhoneScreenContent isLowEndDevice={isLowEndDevice} />
                    </IPhone>
                    {!isLowEndDevice && (
                        <>
                            <ScreenElement
                                className="icon-screen-card-01 icon-screen-card"
                                parallax="credit-card-back-1"
                                image="gf-screen-card-01"
                            />
                            <ScreenElement
                                className="icon-screen-card-02 icon-screen-card"
                                parallax="credit-card-back-2"
                                image="gf-screen-card-02"
                            />
                            <ScreenElement
                                className="icon-screen-card-03 icon-screen-card"
                                parallax="credit-card-back-3"
                                image="gf-screen-card-03"
                            />
                            <ScreenElement
                                className="icon-screen-card-01-mobile icon-screen-card"
                                parallax="credit-card-back-1-mobile"
                                image="gf-screen-card-01"
                            />
                            <ScreenElement
                                className="icon-screen-card-02-mobile icon-screen-card"
                                parallax="credit-card-back-2-mobile"
                                image="gf-screen-card-02"
                            />
                            <ScreenElement
                                className="icon-screen-card-03-mobile icon-screen-card"
                                parallax="credit-card-back-3-mobile"
                                image="gf-screen-card-03"
                            />
                        </>
                    )}
                </div>
                <div className="content-column content-column--right">
                    <SectionTitle>
            Todas tus tarjetas
                        <br />
                        <HighlightedText text="en un solo lugar" containerClassName="highlight--second" />
                    </SectionTitle>
                    <SectionDescription>
                        <p className="description-copy">
              Usá tus <b>tarjetas de crédito</b>
                            <br />
                            <b>y débito</b> de cualquier banco.
                        </p>
                    </SectionDescription>
                    <ArrowButton to="#s7" />
                </div>
            </div>
            <Image className="icon-bill-green" image="gf-bill-green" />
            <Icons.Plus color="green" />
            <Icons.Plus color="grey" />
            <Image className="icon-money-grey" image="gf-money-grey" />
            <div className="icon-bars--grey-1">/</div>
            <div className="icon-bars--grey-2">/</div>
            {!isLowEndDevice && (
                <Icons.RedCircle animation="quarter-circle-rotation" />
            )}
        </ParallaxSection>
    );
};

export default SixthSection;
