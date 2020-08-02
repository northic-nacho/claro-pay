import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import Icons from "../../Components/Icons";
import IPhone from "../../Components/IPhone";
import "./styles.scss";
import SectionDescription from "../../Components/SectionDescription";

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
          <SectionDescription>
            Enviá y recibí dinero,
            <br />
            pagá tus servicios,
            <br />
            recargá tu celu y tu SUBE.
            <p className="description">
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
