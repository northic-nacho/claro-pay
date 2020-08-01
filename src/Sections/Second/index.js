import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';

const SecondSection = () => {
  return (
    <ParallaxSection id="s2">
      <div className="content-group">
        <div className="column left">
          <div className="gf-circle-wipe-green">
            <div
              className="circle-spinner"
              parallax="half-circle-rotation"
            ></div>
          </div>
          <a href="#s3" className="btn-arrow">
            <img
              src="images/icon-arrow-down-red.png"
              srcSet="images/icon-arrow-down-red@2x.png 2x"
              alt="Scroll Down"
            />
          </a>
        </div>
        <div className="column right">
          <div className="section-title">
            <h1 className="title color-red">
              Con todo el
              <br />
              <span className="highlight hl1">
                <i parallax="reveal-left-in:shift(-30%)">respaldo</i>
                respaldo
              </span>
              <br />
              <span className="pl-6"></span>de{" "}
              <span className="highlight  hl2">
                <i parallax="reveal-left-in">Claro</i>Claro
              </span>
            </h1>
          </div>
          <div className="section-description">
            <p className="description">
              Tenés la tranquilidad de operar con una compañía que está en
              la Argentina desde hace más de 10 años con productos y
              servicios pensados <b>para hacerte todo más simple.</b>
            </p>
          </div>
        </div>
      </div>
      <div className="gf-dash-green">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="gf-money-red">
        <img
          src="images/gf-money-red.png"
          srcSet="images/gf-money-red@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-shield-green">
        <img
          src="images/gf-shield-green.png"
          srcSet="images/gf-shield-green@2x.png 2x"
          alt=""
        />
      </div>
      <div className="gf-bars-grey">{'//'}</div>
      <div className="gf-bars-green ocultar-mobile">{'//'}</div>
      <div className="gf-box-small-red"></div>
    </ParallaxSection>
  );
}

export default SecondSection;
