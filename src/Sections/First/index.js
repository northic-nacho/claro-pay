import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import Icons from '../../Components/Icons';
import IPhone from '../../Components/IPhone';
import SectionDescription from '../../Components/SectionDescription';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import './styles.scss';

const FirstSection = () => {
    const { isLowEndDevice } = useDeviceDetection();

    return (
        <ParallaxSection id="s1">
            <div className="content">
                <div className="content__column content__column--left">
                    <IPhone
                        className="iphone-s1"
                        containerParallax={
                            isLowEndDevice ? null : 'slide-in-left slide-in-left:reverse'
                        }
                    />
                    <Icons.GreenCircle
                        animation={isLowEndDevice ? null : 'half-circle-rotation-home'}
                    />
                </div>
                <div className="content__column content__column--right">
                    <SectionTitle>
            Claro Pay
                        <br />
            es tu nueva
                        <br />
                        <HighlightedText text="billetera virtual" />
                    </SectionTitle>
                    <SectionDescription>
                        <p className="description__copy">
              Enviá y recibí dinero,
                            <br />
              pagá tus servicios,
                            <br />
              recargá tu celu y tu SUBE.
                        </p>
                        <p className="description__copy">
                            <b>Abierto las 24 horas en tu celular.</b>
                        </p>
                    </SectionDescription>
                    <ArrowButton to="#s2" />
                </div>
            </div>
            <Icons.Bars color="green" />
            <Icons.Box color="red" />
            <Icons.Dash color="green" />
            <Icons.Bars color="grey" />
        </ParallaxSection>
    );
};

export default FirstSection;
