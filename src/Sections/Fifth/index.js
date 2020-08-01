import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import ArrowButton from "../../Components/ArrowButton";
import './styles.scss';

const FifthSection = () => {
  return (
    <ParallaxSection id="s5">
      <div className="content-group align-items-center">
        <div className="column left">
          <div className="section-title">
            <h1 className="title color-red">
              <span className="highlight">
                <i parallax="reveal-left-in">Movete</i>Movete
              </span>{" "}
              en todo momento, sin obstáculos
            </h1>
          </div>
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
          <div className="gf-screen-sube-money" parallax="sube-money">
            <img
              src="images/gf-screen-sube-money.png"
              srcSet="images/gf-screen-sube-money@2x.png 2x"
              alt=""
            />
          </div>
          <div className="iphone-image-group iphone-s4" parallax="slide-in-right">
            <figure className="iphone-hardware"></figure>
            <figure className="iphone-screen">
              <div className="screen-nav">
                <div className="gf-screen-logo">
                  <img
                    src="images/gf-screen-logo.png"
                    srcSet="images/gf-screen-logo@2x.png 2x"
                    alt=""
                  />
                </div>
                <div className="gf-screen-nav-button">
                  <img
                    src="images/gf-screen-nav-button.png"
                    srcSet="images/gf-screen-nav-button@2x.png 2x"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="gf-screen-sube-outline-front"
                parallax="sube-outline-front"
              >
                <img
                  src="images/gf-screen-sube-outline.png"
                  srcSet="images/gf-screen-sube-outline@2x.png 2x"
                  alt=""
                />
              </div>
              <div
                className="gf-screen-sube-outline-front-mobile"
                parallax="sube-outline-front-mobile"
              >
                <img
                  src="images/gf-screen-sube-outline.png"
                  srcSet="images/gf-screen-sube-outline@2x.png 2x"
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
            </figure>
            <figure className="iphone-shadow"></figure>
          </div>
          <div className="gf-screen-sube-outline-back" parallax="sube-outline-back">
            <img
              src="images/gf-screen-sube-outline.png"
              srcSet="images/gf-screen-sube-outline@2x.png 2x"
              alt=""
            />
          </div>
          <div
            className="gf-screen-sube-outline-back-mobile"
            parallax="sube-outline-back-mobile"
          >
            <img
              src="images/gf-screen-sube-outline.png"
              srcSet="images/gf-screen-sube-outline@2x.png 2x"
              alt=""
            />
          </div>
          <div className="gf-screen-sube-green-back" parallax="sube-green-back">
            <img
              src="images/gf-screen-sube-green.png"
              srcSet="images/gf-screen-sube-green@2x.png 2x"
              alt=""
            />
          </div>
          <div
            className="gf-screen-sube-green-back-mobile"
            parallax="sube-green-back-mobile"
          >
            <img
              src="images/gf-screen-sube-green.png"
              srcSet="images/gf-screen-sube-green@2x.png 2x"
              alt=""
            />
          </div>
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
      <div className="gf-plus-green-1">
        <img
          src="images/gf-plus-green.png"
          srcSet="images/gf-plus-green@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-plus-green-2">
        <img
          src="images/gf-plus-green.png"
          srcSet="images/gf-plus-green@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-plus-green-3">
        <img
          src="images/gf-plus-green.png"
          srcSet="images/gf-plus-green@2x.png 2x"
          alt=""
        />
      </div>
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
      <div className="gf-bars-green">{'//'}</div>
      <div className="gf-circle-wipe-green">
        <div className="circle-spinner" parallax="half-circle-rotation"></div>
      </div>
    </ParallaxSection>
  );
};

export default FifthSection;
