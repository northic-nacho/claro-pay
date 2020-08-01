import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';

const ThirdSection = () => {
  return (
    <ParallaxSection id="s3">
      <div class="content-group align-items-center">
        <div class="column left">
          <div class="section-title">
            <h1 class="title color-red"><span class="highlight"><i parallax="reveal-left-in">Mandá y recibí</i>Mandá y recibí</span><br />dinero</h1>
          </div>
          <div class="section-description">
            <p class="description">con tus amigos, a cuentas Claro Pay, a otras Billeteras Virtuales o a cualquier banco de manera <b>simple y segura.</b></p>
          </div>
          <a href="#s4" class="btn-arrow"><img src="images/icon-arrow-down-red.png" srcset="images/icon-arrow-down-red@2x.png 2x" alt="Scroll Down" /></a>
        </div>
        <div class="column right">
          <div class="iphone-image-group iphone-s4" parallax="slide-in-right">
            <figure class="iphone-hardware"></figure>
            <figure class="iphone-screen">
              <div class="screen-nav">
                <div class="gf-screen-logo"><img src="images/gf-screen-logo.png" srcset="images/gf-screen-logo@2x.png 2x" /></div>
                <div class="gf-screen-nav-button"><img src="images/gf-screen-nav-button.png" srcset="images/gf-screen-nav-button@2x.png 2x" /></div>
              </div>
              <div class="gf-screen-money-icon" parallax="screen-wallet"><img src="images/gf-screen-money-icon.png" srcset="images/gf-screen-money-icon@2x.png 2x" alt="" /></div>
              <div class="gf-screen-wallet" parallax="screen-wallet"><img src="images/gf-screen-wallet.png" srcset="images/gf-screen-wallet@2x.png 2x" alt="" /></div>
              <div class="screen-money"><h4 class="text-money"><span id="dinero-celular" parallax="screen-circle"><small>$</small> 85.00</span></h4></div>
              <div class="gf-screen-check" parallax="screen-check-green"><img src="images/gf-screen-check-green.png" srcset="images/gf-screen-check-green@2x.png 2x" alt="" /></div>
              <div class="gf-screen-app-buttons"><img src="images/gf-screen-app-buttons.png" srcset="images/gf-screen-app-buttons@2x.png 2x" alt="" /></div>
              <div class="gf-screen-circle-red" parallax="screen-circle"></div>
            </figure>
            <figure class="iphone-shadow"></figure>
          </div>
          <div class="gf-big-bill" parallax="bill-slide-in-top"><img src="images/gf-big-bill.png" srcset="images/gf-big-bill@2x.png 2x" /></div>
          <div class="gf-circle-white" parallax="zoom-in:shift(10%)"></div>
          <div class="gf-moare-right"><img src="images/gf-moare-right.png" srcset="images/gf-moare-right@2x.png 2x" /></div>
        </div>
      </div>
      <div className="gf-shield-green"><img src="images/gf-shield-green.png" srcSet="images/gf-shield-green@2x.png 2x" /></div>
      <div className="gf-bars-grey">//</div>
      <div className="gf-money-grey"><img src="images/gf-money-grey.png" srcSet="images/gf-money-grey@2x.png 2x" /></div>
      <div className="gf-money-white"><img src="images/gf-money-white.png" srcSet="images/gf-money-white@2x.png 2x" /></div>
      <div className="gf-check-green ocultar-mobile"><img src="images/gf-check-green.png" srcSet="images/gf-check-green@2x.png 2x" /></div>
      <div className="gf-dash-grey"><i></i><i></i><i></i></div>
      <div className="gf-plus-green"><img src="images/gf-plus-green.png" srcSet="images/gf-plus-green@2x.png 2x" /></div>
      <div className="gf-plus-white"><img src="images/gf-plus-white.png" srcSet="images/gf-plus-white@2x.png 2x" /></div>
      <div className="gf-circle-green" parallax="zoom-in zoom-in:reverse"></div>
    </ParallaxSection>
  );
}

export default ThirdSection;
