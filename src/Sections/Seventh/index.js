import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import IPhone from "../../Components/IPhone";
import ScreenElement from "../../Components/ScreenElement";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";
import "./styles.scss";

const SeventhSection = () => {
  const { isMobileDevice } = useDeviceDetection();

  return (
    <ParallaxSection id="s7">
      <div parallax="anim-stage">
        <div className="content-group align-items-center">
          <div className="column left">
            <SectionTitle>
              Recargá
              <br />
              con{" "}
              <HighlightedText
                text="descuentos"
                containerClassName="hl1"
                effect="reveal-left-in:shift(-30%)"
              />
              <br />
              <HighlightedText text="exclusivos" containerClassName="hl2 " />
            </SectionTitle>
            <div className="section-description">
              <p className="description">
                Recibí <b>alertas con descuentos</b>
                <br />
                para tu línea Claro
              </p>
            </div>
            <ArrowButton to="#s8" />
          </div>
          <div className="column right">
            <IPhone
              className="iphone-s4"
              showScreen
              showScreenNav
              screenParallax="iphone-screen-notification"
            >
              <div className="notification-container">
                <img
                  parallax="notification-btn"
                  className="notification-btn"
                  src="images/gf-notification-btn.png"
                  srcSet="images/gf-notification-btn@2x.png 2x"
                  alt=""
                />
              </div>
              <div className="notification-container-mobile">
                <img
                  parallax="notification-btn-mobile"
                  className="notification-btn-mobile"
                  src="images/gf-notification-btn.png"
                  srcSet="images/gf-notification-btn@2x.png 2x"
                  alt=""
                />
              </div>
              <ScreenElement
                className="gf-screen-app-buttons"
                image="gf-screen-app-buttons"
              />
            </IPhone>
            <div className="gf-moare-right">
              <img
                src="images/gf-moare-grey.png"
                srcSet="images/gf-moare-grey@2x.png 2x"
                alt=""
              />
            </div>
            {isMobileDevice ? (
              ""
            ) : (
              <div
                className="gf-circle-green"
                parallax="zoom-in:shift(10%)"
              ></div>
            )}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default SeventhSection;
