import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import SectionDescription from '../../Components/SectionDescription';
import Image from '../../Components/Image';
import Icons from '../../Components/Icons';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import './styles.scss';

const SecondSection = () => {
    const { isLowEndDevice } = useDeviceDetection();

    return (
        <ParallaxSection id="s2">
            <div className="content-group">
                <div className="column left">
                    <Icons.GreenCircle
                        animation={isLowEndDevice ? null : 'half-circle-rotation'}
                    />
                    <ArrowButton to="#s3" />
                </div>
                <div className="column right">
                    <SectionTitle>
            Con todo el
                        <br />
                        <HighlightedText
                            text="respaldo"
                            containerClassName="hl1"
                            effect="reveal-left-in:shift(-30%)"
                        />
                        <br />
                        <span className="pl-6" />
            de <HighlightedText text="Claro" containerClassName="hl2" />
                    </SectionTitle>
                    <SectionDescription>
                        <p className="description">
              Tenés la tranquilidad de operar con una compañía que está en la
              Argentina desde hace más de 10 años con productos y servicios
              pensados <b>para hacerte todo más simple.</b>
                        </p>
                    </SectionDescription>
                </div>
            </div>
            <Icons.Dash color="green" />
            <Image className="gf-money-red" image="gf-money-red" />
            <Image className="gf-shield-green" image="gf-shield-green" />
            <Icons.Bars color="grey" />
            <Icons.Bars color="green" hideInMobile />
            <Icons.Box color="red" />
        </ParallaxSection>
    );
};

export default SecondSection;
