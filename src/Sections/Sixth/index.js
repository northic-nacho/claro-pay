import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import Icons from "../../Components/Icons";
import IPhone from "../../Components/IPhone";
import Image from "../../Components/Image";
import ScreenElement from "../../Components/ScreenElement";
import "./styles.scss";

const SixthSection = () => {
  return (
    <ParallaxSection id="s6">
      <div className="content-group align-items-center">
        <div className="column left">
          <IPhone className="iphone-s4" showScreen>
            <ScreenElement
              className="gf-screen-card-in-01 gf-screen-card-in"
              parallax="credit-card-in-1"
              image="gf-screen-card-01"
            />
            <ScreenElement
              className="gf-screen-card-in-02 gf-screen-card-in"
              parallax="credit-card-in-2"
              image="gf-screen-card-02"
            />
            <ScreenElement
              className="gf-screen-card-in-03 gf-screen-card-in"
              parallax="credit-card-in-3"
              image="gf-screen-card-03"
            />
            <ScreenElement
              className="gf-screen-cards-background"
              image="gf-screen-cards-background"
            />
          </IPhone>
          <ScreenElement
            className="gf-screen-card-01 gf-screen-card"
            parallax="credit-card-back-1"
            image="gf-screen-card-01"
          />
          <ScreenElement
            className="gf-screen-card-02 gf-screen-card"
            parallax="credit-card-back-2"
            image="gf-screen-card-02"
          />
          <ScreenElement
            className="gf-screen-card-03 gf-screen-card"
            parallax="credit-card-back-3"
            image="gf-screen-card-03"
          />
          <ScreenElement
            className="gf-screen-card-01-mobile gf-screen-card"
            parallax="credit-card-back-1-mobile"
            image="gf-screen-card-01"
          />
          <ScreenElement
            className="gf-screen-card-02-mobile gf-screen-card"
            parallax="credit-card-back-2-mobile"
            image="gf-screen-card-02"
          />
          <ScreenElement
            className="gf-screen-card-03-mobile gf-screen-card"
            parallax="credit-card-back-3-mobile"
            image="gf-screen-card-03"
          />
        </div>
        <div className="column right">
          <SectionTitle>
            Todas tus tarjetas
            <br />
            <HighlightedText text="en un solo lugar" containerClassName="hl2" />
          </SectionTitle>
          <div className="section-description">
            <p className="description">
              Usá tus <b>tarjetas de crédito</b>
              <br />
              <b>y débito</b> de cualquier banco.
            </p>
          </div>
          <ArrowButton to="#s7" />
        </div>
      </div>
      <Image
        className="gf-bill-green"
        image="gf-bill-green"
      />
      <Icons.Plus color="green" />
      <Icons.Plus color="grey" />
      <Image
        className="gf-money-grey"
        image="gf-money-grey"
      />
      <Icons.Bars color="grey" />
      <Icons.GreenCircle animation="quarter-circle-rotation" />
    </ParallaxSection>
  );
};

export default SixthSection;
