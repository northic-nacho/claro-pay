import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import Icons from "../../Components/Icons";
import IPhone from "../../Components/IPhone";
import "./styles.scss";

const FirstSection = () => {
  return (
    <ParallaxSection id="s1">
      <div className="content-group">
        <div className="column left">
          <IPhone
            className="iphone-s1"
            containerParallax="slide-in-left slide-in-left:reverse"
          />
          <Icons.GreenCircle animation="half-circle-rotation-home" />
        </div>
        <div className="column right">
          <SectionTitle>
            Claro Pay
            <br />
            es tu nueva
            <br />
            <HighlightedText text="billetera virtual" />
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
          <ArrowButton to="#s2" />
        </div>
      </div>
      <Icons.Bars color="green" />
      <div className="gf-box-small-red"></div>
      <div className="gf-dash-green">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <Icons.Bars color="grey" />
    </ParallaxSection>
  );
};

export default FirstSection;
