import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import SectionDescription from "../../Components/SectionDescription";
import Icons from "../../Components/Icons";
import ScreenElement from "../../Components/ScreenElement";
import Image from "../../Components/Image";
import IPhone from "../../Components/IPhone";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";
import "./styles.scss";

const ThirdSection = () => {
  const { isMobileDevice } = useDeviceDetection();

  const iphoneProps = {
    containerParallax: isMobileDevice ? null : "slide-in-right",
  };

  return (
    <ParallaxSection id="s3">
      <div className="content-group align-items-center">
        <div className="column left">
          <SectionTitle>
            <HighlightedText text="Mandá y recibí" />
            <br />
            dinero
          </SectionTitle>
          <SectionDescription>
            con tus amigos, a cuentas Claro Pay, a otras Billeteras Virtuales o
            a cualquier banco de manera <b>simple y segura.</b>
          </SectionDescription>
          <ArrowButton to="#s4" />
        </div>
        <div className="column right">
          <IPhone
            className="iphone-s4"
            showScreen
            showScreenNav
            {...iphoneProps}
          >
            <ScreenElement
              className="gf-screen-money-icon"
              parallax="screen-wallet"
              image="gf-screen-money-icon"
            />
            <ScreenElement
              className="gf-screen-wallet"
              parallax="screen-wallet"
              image="gf-screen-wallet"
            />
            <div className="screen-money">
              <h4 className="text-money">
                <span id="dinero-celular" parallax="screen-circle">
                  <small>$</small> 85.00
                </span>
              </h4>
            </div>
            <ScreenElement
              className="gf-screen-check"
              parallax="screen-check-green"
              image="gf-screen-check-green"
            />
            <ScreenElement
              className="gf-screen-app-buttons"
              image="gf-screen-app-buttons"
            />
            <div className="gf-screen-circle-red" parallax="screen-circle" />
          </IPhone>
          <Image
            image="gf-big-bill"
            className="gf-big-bill"
            parallax="bill-slide-in-top"
          />
          <div className="gf-circle-white" parallax="zoom-in:shift(10%)" />
          <Image image="gf-moare-right" className="gf-moare-right" />
        </div>
      </div>
      <Image className="gf-shield-green" image="gf-shield-green" />
      <Icons.Bars color="grey" />
      <Image className="gf-money-grey" image="gf-money-grey" />
      <Image className="gf-money-white" image="gf-money-white" />
      <Image className="gf-check-green ocultar-mobile" image="gf-check-green" />
      <Icons.Dash color="grey" />
      <Icons.Plus color="green" />
      <Icons.Plus color="white" />
      {isMobileDevice ? (
        ""
      ) : (
        <div className="gf-circle-green" parallax="zoom-in zoom-in:reverse" />
      )}
    </ParallaxSection>
  );
};

export default ThirdSection;
