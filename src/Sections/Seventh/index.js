import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import ArrowButton from '../../Components/ArrowButton';
import './styles.scss';

const SeventhSection = () => {
  return (
    <ParallaxSection id="s7">
      <div parallax="anim-stage">
        <div className="content-group align-items-center">
          <div className="column left">
            <div className="section-title">
              <h1 className="title color-red">Recargá<br />con <span className="highlight hl1"><i parallax="reveal-left-in:shift(-30%)">descuentos</i>descuentos</span> <span className="highlight hl2"><i parallax="reveal-left-in">exclusivos</i>exclusivos</span></h1>
            </div>
            <div className="section-description">
              <p className="description">Recibí <b>alertas con descuentos</b><br />para tu línea Claro</p>
            </div>
            <ArrowButton to="#s8" />
          </div>
          <div className="column right">
            <div className="iphone-image-group iphone-s4">
              <figure className="iphone-hardware"></figure>
              <figure className="iphone-screen" parallax="iphone-screen-notification">
                <div className="screen-nav">
                  <div className="gf-screen-logo"><img src="images/gf-screen-logo.png" srcSet="images/gf-screen-logo@2x.png 2x" alt=""/></div>
                  <div className="gf-screen-nav-button"><img src="images/gf-screen-nav-button.png" srcSet="images/gf-screen-nav-button@2x.png 2x" alt=""/>
                  </div>
                </div>
                <div className="notification-container">
                  <img parallax="notification-btn" className="notification-btn" src="images/gf-notification-btn.png" srcSet="images/gf-notification-btn@2x.png 2x" alt="" />
                </div>
                <div className="notification-container-mobile">
                  <img parallax="notification-btn-mobile" className="notification-btn-mobile" src="images/gf-notification-btn.png" srcSet="images/gf-notification-btn@2x.png 2x" alt="" />
                </div>
                <div className="gf-screen-app-buttons"><img src="images/gf-screen-app-buttons.png" srcSet="images/gf-screen-app-buttons@2x.png 2x" alt="" /></div>
              </figure>
              <figure className="iphone-shadow"></figure>
            </div>
            <div className="gf-moare-right"><img src="images/gf-moare-grey.png" srcSet="images/gf-moare-grey@2x.png 2x" alt=""/></div>
            <div className="gf-circle-green" parallax="zoom-in:shift(10%)"></div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default SeventhSection;
