import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import './styles.scss';

const FirstSection = () => {
  return (
    <ParallaxSection id="s1">
      <div className="content-group">
        <div className="column left">
          <div
            className="iphone-image-group iphone-s1"
            parallax="slide-in-left slide-in-left:reverse"
          >
            <figure className="iphone-hardware"></figure>
            <figure className="iphone-shadow"></figure>
          </div>
          <div className="gf-circle-wipe-green">
            <div
              className="circle-spinner"
              parallax="half-circle-rotation-home"
            ></div>
          </div>
        </div>
        <div className="column right">
          <SectionTitle>
            Claro Pay
            <br />
            es tu nueva
            <br />
            <HighlightedText text="billetera virtual"/>
          </SectionTitle>
          <div className="section-description">
            <p className="description">
              Enviá y recibí dinero,
              <br />
              pagá tus servicios,
              <br />
              recargá tu celu y tu SUBE.
            </p>
            <p className="description">
              <b>Abierto las 24 horas en tu celular.</b>
            </p>
          </div>
          <ArrowButton to="#s2"/>
        </div>
      </div>
      <div className="gf-bars-green">{'//'}</div>
      <div className="gf-box-small-red"></div>
      <div className="gf-dash-green">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="gf-bars-grey">{'//'}</div>
    </ParallaxSection>
  );
}

export default FirstSection;
