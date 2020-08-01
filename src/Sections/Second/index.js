import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import HighlightedText from '../../Components/HighlightedText';
import SectionTitle from '../../Components/SectionTitle';
import './styles.scss';

const SecondSection = () => {
  return (
    <ParallaxSection id="s2">
      <div className="content-group">
        <div className="column left">
          <div className="gf-circle-wipe-green">
            <div
              className="circle-spinner"
              parallax="half-circle-rotation"
            ></div>
          </div>
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
      <div className="gf-money-red">
        <img
          src="images/gf-money-red.png"
          srcSet="images/gf-money-red@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-shield-green">
        <img
          src="images/gf-shield-green.png"
          srcSet="images/gf-shield-green@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-bars-grey">{'//'}</div>
      <div className="gf-bars-green ocultar-mobile">{'//'}</div>
      <div className="gf-box-small-red"></div>
    </ParallaxSection>
  );
}

export default SecondSection;
