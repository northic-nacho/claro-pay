import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";

const SixthSection = () => {
  return (
    <ParallaxSection id="s6">
      <div classNameName="content-group align-items-center">
        <div className="column left">
          <div className="iphone-image-group iphone-s4">
            <figure className="iphone-hardware"></figure>
            <figure className="iphone-screen">
              <div
                className="gf-screen-card-in-01 gf-screen-card-in"
                parallax="credit-card-in-1"
              >
                <img
                  src="images/gf-screen-card-01.png"
                  srcset="images/gf-screen-card-01@2x.png 2x"
                />
              </div>

              <div
                className="gf-screen-card-in-02 gf-screen-card-in"
                parallax="credit-card-in-2"
              >
                <img
                  src="images/gf-screen-card-02.png"
                  srcset="images/gf-screen-card-02@2x.png 2x"
                />
              </div>
              <div
                className="gf-screen-card-in-03 gf-screen-card-in"
                parallax="credit-card-in-3"
              >
                <img
                  src="images/gf-screen-card-03.png"
                  srcset="images/gf-screen-card-03@2x.png 2x"
                />
              </div>

              <div className="gf-screen-cards-background">
                <img
                  src="images/gf-screen-cards-background.png"
                  srcset="images/gf-screen-cards-background@2x.png 2x"
                  alt=""
                />
              </div>
            </figure>
            <figure className="iphone-shadow"></figure>
          </div>
          <div
            className="gf-screen-card-01 gf-screen-card"
            parallax="credit-card-back-1"
          >
            <img
              src="images/gf-screen-card-01.png"
              srcset="images/gf-screen-card-01@2x.png 2x"
            />
          </div>
          <div
            className="gf-screen-card-02 gf-screen-card"
            parallax="credit-card-back-2"
          >
            <img
              src="images/gf-screen-card-02.png"
              srcset="images/gf-screen-card-02@2x.png 2x"
            />
          </div>
          <div
            className="gf-screen-card-03 gf-screen-card"
            parallax="credit-card-back-3"
          >
            <img
              src="images/gf-screen-card-03.png"
              srcset="images/gf-screen-card-03@2x.png 2x"
            />
          </div>

          <div
            className="gf-screen-card-01-mobile gf-screen-card"
            parallax="credit-card-back-1-mobile"
          >
            <img
              src="images/gf-screen-card-01.png"
              srcset="images/gf-screen-card-01@2x.png 2x"
            />
          </div>
          <div
            className="gf-screen-card-02-mobile gf-screen-card"
            parallax="credit-card-back-2-mobile"
          >
            <img
              src="images/gf-screen-card-02.png"
              srcset="images/gf-screen-card-02@2x.png 2x"
            />
          </div>
          <div
            className="gf-screen-card-03-mobile gf-screen-card"
            parallax="credit-card-back-3-mobile"
          >
            <img
              src="images/gf-screen-card-03.png"
              srcset="images/gf-screen-card-03@2x.png 2x"
            />
          </div>
        </div>
        <div className="column right">
          <div className="section-title">
            <h1 className="title color-red">
              Todas tus tarjetas
              <br />
              <span className="highlight hl2">
                <i parallax="reveal-left-in">en un solo lugar</i>en un solo
                lugar
              </span>
            </h1>
          </div>
          <div className="section-description">
            <p className="description">
              Usá tus <b>tarjetas de crédito</b>
              <br />
              <b>y débito</b> de cualquier banco.
            </p>
          </div>
          <a href="#s7" className="btn-arrow">
            <img
              src="images/icon-arrow-down-red.png"
              srcset="images/icon-arrow-down-red@2x.png 2x"
              alt="Scroll Down"
            />
          </a>
        </div>
      </div>
      <div className="gf-bill-green">
        <img
          src="images/gf-bill-green.png"
          srcset="images/gf-bill-green@2x.png 2x"
        />
      </div>
      <div className="gf-plus-green">
        <img
          src="images/gf-plus-green.png"
          srcset="images/gf-plus-green@2x.png 2x"
        />
      </div>
      <div className="gf-plus-grey">
        <img
          src="images/gf-plus-grey.png"
          srcset="images/gf-plus-grey@2x.png 2x"
        />
      </div>
      <div className="gf-money-grey">
        <img
          src="images/gf-money-grey.png"
          srcset="images/gf-money-grey@2x.png 2x"
        />
      </div>
      <div className="gf-bars-grey-1">/</div>
      <div className="gf-bars-grey-2">/</div>
      <div className="gf-circle-wipe-green">
        <div
          className="circle-spinner"
          parallax="quarter-circle-rotation"
        ></div>
      </div>
    </ParallaxSection>
  );
};

export default SixthSection;
