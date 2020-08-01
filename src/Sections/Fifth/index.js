import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";

const FifthSection = () => {
  return (
    <ParallaxSection id="s5">
      <div class="content-group align-items-center">
        <div class="column left">
          <div class="section-title">
            <h1 class="title color-red">
              <span class="highlight">
                <i parallax="reveal-left-in">Movete</i>Movete
              </span>{" "}
              en todo momento, sin obstáculos
            </h1>
          </div>
          <div class="section-description">
            <p class="description">
              Podés cargar tu tarjeta <b>Sube</b>
              <br />
              cuando lo necesites,
              <br />
              <b>estés donde estés.</b>
            </p>
          </div>
          <a href="#s6" class="btn-arrow">
            <img
              src="images/icon-arrow-down-red.png"
              srcset="images/icon-arrow-down-red@2x.png 2x"
              alt="Scroll Down"
            />
          </a>
        </div>
        <div class="column right">
          <div class="gf-screen-sube-money" parallax="sube-money">
            <img
              src="images/gf-screen-sube-money.png"
              srcset="images/gf-screen-sube-money@2x.png 2x"
            />
          </div>
          <div class="iphone-image-group iphone-s4" parallax="slide-in-right">
            <figure class="iphone-hardware"></figure>
            <figure class="iphone-screen">
              <div class="screen-nav">
                <div class="gf-screen-logo">
                  <img
                    src="images/gf-screen-logo.png"
                    srcset="images/gf-screen-logo@2x.png 2x"
                  />
                </div>
                <div class="gf-screen-nav-button">
                  <img
                    src="images/gf-screen-nav-button.png"
                    srcset="images/gf-screen-nav-button@2x.png 2x"
                  />
                </div>
              </div>
              <div
                class="gf-screen-sube-outline-front"
                parallax="sube-outline-front"
              >
                <img
                  src="images/gf-screen-sube-outline.png"
                  srcset="images/gf-screen-sube-outline@2x.png 2x"
                />
              </div>
              <div
                class="gf-screen-sube-outline-front-mobile"
                parallax="sube-outline-front-mobile"
              >
                <img
                  src="images/gf-screen-sube-outline.png"
                  srcset="images/gf-screen-sube-outline@2x.png 2x"
                />
              </div>
              <div class="gf-screen-app-buttons">
                <img
                  src="images/gf-screen-app-buttons.png"
                  srcset="images/gf-screen-app-buttons@2x.png 2x"
                  alt=""
                />
              </div>
            </figure>
            <figure class="iphone-shadow"></figure>
          </div>
          <div class="gf-screen-sube-outline-back" parallax="sube-outline-back">
            <img
              src="images/gf-screen-sube-outline.png"
              srcset="images/gf-screen-sube-outline@2x.png 2x"
            />
          </div>
          <div
            class="gf-screen-sube-outline-back-mobile"
            parallax="sube-outline-back-mobile"
          >
            <img
              src="images/gf-screen-sube-outline.png"
              srcset="images/gf-screen-sube-outline@2x.png 2x"
            />
          </div>
          <div class="gf-screen-sube-green-back" parallax="sube-green-back">
            <img
              src="images/gf-screen-sube-green.png"
              srcset="images/gf-screen-sube-green@2x.png 2x"
            />
          </div>
          <div
            class="gf-screen-sube-green-back-mobile"
            parallax="sube-green-back-mobile"
          >
            <img
              src="images/gf-screen-sube-green.png"
              srcset="images/gf-screen-sube-green@2x.png 2x"
            />
          </div>
          <div class="gf-circle-grey-2"></div>
          <div class="gf-circle-bar-grey">
            <img
              src="images/gf-circle-bar-grey.png"
              srcset="images/gf-circle-bar-grey@2x.png 2x"
            />
          </div>
          <div class="gf-moare-right">
            <img
              src="images/gf-moare-right.png"
              srcset="images/gf-moare-right@2x.png 2x"
            />
          </div>
        </div>
      </div>
      <div class="gf-plus-green-1">
        <img
          src="images/gf-plus-green.png"
          srcset="images/gf-plus-green@2x.png 2x"
        />
      </div>
      <div class="gf-plus-green-2">
        <img
          src="images/gf-plus-green.png"
          srcset="images/gf-plus-green@2x.png 2x"
        />
      </div>
      <div class="gf-plus-green-3">
        <img
          src="images/gf-plus-green.png"
          srcset="images/gf-plus-green@2x.png 2x"
        />
      </div>
      <div class="gf-money-grey">
        <img
          src="images/gf-money-grey.png"
          srcset="images/gf-money-grey@2x.png 2x"
        />
      </div>
      <div class="gf-house-grey ocultar-mobile">
        <img
          src="images/gf-house-grey.png"
          srcset="images/gf-house-grey@2x.png 2x"
        />
      </div>
      <div class="gf-circle-grey-1"></div>
      <div class="gf-bars-green">//</div>
      <div class="gf-circle-wipe-green">
        <div class="circle-spinner" parallax="half-circle-rotation"></div>
      </div>
    </ParallaxSection>
  );
};

export default FifthSection;
