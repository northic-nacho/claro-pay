import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import IPhone from "../../Components/IPhone";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";
import "./styles.scss";

const ThirdSection = () => {
  const { isMobileDevice } = useDeviceDetection();

  const iphoneProps = isMobileDevice
    ? {}
    : { containerParallax: "slide-in-right" };

  return (
    <ParallaxSection id="s3">
      <div className="content-group align-items-center">
        <div className="column left">
          <SectionTitle>
            <HighlightedText text="Mandá y recibí" />
            <br />
            dinero
          </SectionTitle>
          <div className="section-description">
            <p className="description">
              con tus amigos, a cuentas Claro Pay, a otras Billeteras Virtuales
              o a cualquier banco de manera <b>simple y segura.</b>
            </p>
          </div>
          <ArrowButton to="#s4" />
        </div>
        <div className="column right">
          <IPhone
            className="iphone-s4"
            showScreen
            showScreenNav
            {...iphoneProps}
          >
            <div className="gf-screen-money-icon" parallax="screen-wallet">
              <img
                src="images/gf-screen-money-icon.png"
                srcSet="images/gf-screen-money-icon@2x.png 2x"
                alt=""
              />
            </div>
            <div className="gf-screen-wallet" parallax="screen-wallet">
              <img
                src="images/gf-screen-wallet.png"
                srcSet="images/gf-screen-wallet@2x.png 2x"
                alt=""
              />
            </div>
            <div className="screen-money">
              <h4 className="text-money">
                <span id="dinero-celular" parallax="screen-circle">
                  <small>$</small> 85.00
                </span>
              </h4>
            </div>
            <div className="gf-screen-check" parallax="screen-check-green">
              <img
                src="images/gf-screen-check-green.png"
                srcSet="images/gf-screen-check-green@2x.png 2x"
                alt=""
              />
            </div>
            <div className="gf-screen-app-buttons">
              <img
                src="images/gf-screen-app-buttons.png"
                srcSet="images/gf-screen-app-buttons@2x.png 2x"
                alt=""
              />
            </div>
            <div
              className="gf-screen-circle-red"
              parallax="screen-circle"
            ></div>
          </IPhone>
          <div className="gf-big-bill" parallax="bill-slide-in-top">
            <img
              src="images/gf-big-bill.png"
              srcSet="images/gf-big-bill@2x.png 2x"
              alt=""
            />
          </div>
          <div className="gf-circle-white" parallax="zoom-in:shift(10%)"></div>
          <div className="gf-moare-right">
            <img
              src="images/gf-moare-right.png"
              srcSet="images/gf-moare-right@2x.png 2x"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="gf-shield-green">
        <img
          src="images/gf-shield-green.png"
          srcSet="images/gf-shield-green@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-bars-grey">{"//"}</div>
      <div className="gf-money-grey">
        <img
          src="images/gf-money-grey.png"
          srcSet="images/gf-money-grey@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-money-white">
        <img
          src="images/gf-money-white.png"
          srcSet="images/gf-money-white@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-check-green ocultar-mobile">
        <img
          src="images/gf-check-green.png"
          srcSet="images/gf-check-green@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-dash-grey">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="gf-plus-green">
        <img
          src="images/gf-plus-green.png"
          srcSet="images/gf-plus-green@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-plus-white">
        <img
          src="images/gf-plus-white.png"
          srcSet="images/gf-plus-white@2x.png 2x"
          alt=""
        />
      </div>
      {isMobileDevice ? (
        ""
      ) : (
        <div
          className="gf-circle-green"
          parallax="zoom-in zoom-in:reverse"
        ></div>
      )}
    </ParallaxSection>
  );
};

export default ThirdSection;
