import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import SectionDescription from "../../Components/SectionDescription";
import Icons from "../../Components/Icons";
import ScreenElement from "../../Components/ScreenElement";
import IPhone from "../../Components/IPhone";
import Image from "../../Components/Image";
import Video from "../../Components/Video";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";
import "./styles.scss";

const IPhoneScreenContent = ({ isLowEndDevice }) => {
  if (isLowEndDevice) {
    return <Video id="s5" name="screen-sube" />;
  }

  return (
    <>
      <ScreenElement
        parallax="sube-outline-front"
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
    </>
  );
};

const FifthSection = () => {
  const { isMobileDevice, isLowEndDevice } = useDeviceDetection();

  const iphoneProps = {
    containerParallax: isMobileDevice ? null : "slide-in-right",
    showScreenNav: isLowEndDevice ? false : "true",
  };

  return (
    <ParallaxSection id="s5">
      <div className="content-group align-items-center">
        <div className="column left">
          <SectionTitle>
            <HighlightedText text="Movete" /> en todo momento, sin obstáculos
          </SectionTitle>
          <SectionDescription>
            <p className="description">
              Podés cargar tu tarjeta <b>Sube</b>
              <br />
              cuando lo necesites,
              <br />
              <b>estés donde estés.</b>
            </p>
          </SectionDescription>
          <ArrowButton to="#s6" />
        </div>
        <div className="column right">
          {!isLowEndDevice && (
            <ScreenElement
              parallax="sube-money"
              className="gf-screen-sube-money"
              image="gf-screen-sube-money"
            />
          )}
          <IPhone className="iphone-s4" showScreen {...iphoneProps}>
            <IPhoneScreenContent isLowEndDevice={isLowEndDevice} />
          </IPhone>
          {!isLowEndDevice && (
            <>
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
            </>
          )}
          <div className="gf-circle-grey-2" />
          <Image className="gf-circle-bar-grey" image="gf-circle-bar-grey" />
          <Image className="gf-moare-right" image="gf-moare-right" />
        </div>
      </div>
      <Icons.Plus color="green" iconKey={1} />
      <Icons.Plus color="green" iconKey={2} />
      <Icons.Plus color="green" iconKey={3} />
      <Image className="gf-money-grey" image="gf-money-grey" />
      <Image className="gf-house-grey ocultar-mobile" image="gf-house-grey" />
      <div className="gf-circle-grey-1" />
      <Icons.Bars color="green" />
      <Icons.GreenCircle
        animation={isLowEndDevice ? null : "half-circle-rotation"}
      />
    </ParallaxSection>
  );
};

export default FifthSection;
