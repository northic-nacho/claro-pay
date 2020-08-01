import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import Image from '../../Components/Image';
import Icons from '../../Components/Icons';
import './styles.scss';

const SecondSection = () => {
  return (
    <ParallaxSection id="s2">
      <div className="content-group">
        <div className="column left">
          <Icons.GreenCircle animation="half-circle-rotation" />
          <ArrowButton to="#s3" />
        </div>
        <div className="column right">
          <SectionTitle>
            Con todo el
            <br />
            <HighlightedText text="respaldo" containerClassName="hl1" effect="reveal-left-in:shift(-30%)" />
            <br />
            <span className="pl-6"></span>de{" "}
            <HighlightedText text="Claro" containerClassName="hl2" />
          </SectionTitle>
          <div className="section-description">
            <p className="description">
              Tenés la tranquilidad de operar con una compañía que está en
              la Argentina desde hace más de 10 años con productos y
              servicios pensados <b>para hacerte todo más simple.</b>
            </p>
          </div>
        </div>
      </div>
      <div className="gf-dash-green">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <Image
        className="gf-money-red"
        image="gf-money-red"
      />
      <Image
        className="gf-shield-green"
        image="gf-shield-green"
      />
      <Icons.Bars color="grey" />
      <Icons.Bars color="green" hideInMobile />
      <div className="gf-box-small-red"></div>
    </ParallaxSection>
  );
}

export default SecondSection;
