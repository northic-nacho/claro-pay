import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import Icons from "../../Components/Icons";
import ScreenElement from "../../Components/ScreenElement";
import IPhone from "../../Components/IPhone";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";
import "./styles.scss";

const FifthSection = () => {
  const { isMobileDevice } = useDeviceDetection();

  const iphoneProps = isMobileDevice
    ? {}
    : { containerParallax: "slide-in-right" };

  return (
    <ParallaxSection id="s5">
      <div className="content-group align-items-center">
        <div className="column left">
          <SectionTitle>
            <HighlightedText text="Movete" /> en todo momento, sin obstáculos
          </SectionTitle>
          <div className="section-description">
            <p className="description">
              Podés cargar tu tarjeta <b>Sube</b>
              <br />
              cuando lo necesites,
              <br />
              <b>estés donde estés.</b>
            </p>
          </div>
          <ArrowButton to="#s6" />
        </div>
        <div className="column right">
          <ScreenElement
            parallax="sube-money"
            className="gf-screen-sube-money"
            image="gf-screen-sube-money"
          />
          <IPhone
            className="iphone-s4"
            showScreen
            showScreenNav
            {...iphoneProps}
          >
            <ScreenElement
              parallax="sube-outline-front-mobile"
              className="gf-screen-sube-outline-front"
              image="gf-screen-sube-outline"
            />
            <ScreenElement
              parallax="sube-outline-front-mobile"
              className="gf-screen-sube-outline-front-mobile"
              image="gf-screen-sube-outline"
            />
            <ScreenElement
              className="gf-screen-app-buttons"
              image="gf-screen-app-buttons"
            />
          </IPhone>
          <ScreenElement
            className="gf-screen-sube-outline-back"
            parallax="sube-outline-back"
            image="gf-screen-sube-outline"
          />
          <ScreenElement
            className="gf-screen-sube-outline-back-mobile"
            parallax="sube-outline-back-mobile"
            image="gf-screen-sube-outline"
          />
          <ScreenElement
            className="gf-screen-sube-green-back"
            parallax="sube-green-back"
            image="gf-screen-sube-green"
          />
          <ScreenElement
            className="gf-screen-sube-green-back-mobile"
            parallax="sube-green-back-mobile"
            image="gf-screen-sube-green"
          />
          <div className="gf-circle-grey-2"></div>
          <div className="gf-circle-bar-grey">
            <img
              src="images/gf-circle-bar-grey.png"
              srcSet="images/gf-circle-bar-grey@2x.png 2x"
              alt=""
            />
          </div>
          <div className="gf-moare-right">
            <img
              src="images/gf-moare-right.png"
              srcSet="images/gf-moare-right@2x.png 2x"
              alt=""
            />
          </div>
        </div>
      </div>
      <Icons.Plus color="green" iconKey={1} />
      <Icons.Plus color="green" iconKey={2} />
      <Icons.Plus color="green" iconKey={3} />
      <div className="gf-money-grey">
        <img
          src="images/gf-money-grey.png"
          srcSet="images/gf-money-grey@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-house-grey ocultar-mobile">
        <img
          src="images/gf-house-grey.png"
          srcSet="images/gf-house-grey@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-circle-grey-1"></div>
      <Icons.Bars color="green" />
      <Icons.GreenCircle animation="half-circle-rotation" />
    </ParallaxSection>
  );
};

export default FifthSection;
