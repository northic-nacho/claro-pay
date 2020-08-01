import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';

const FourthSection = () => {
  return (
    <ParallaxSection id="s4">
      <div className="content-group align-items-center">
        <div className="column left">
          <div className="iphone-image-group iphone-s4" parallax="slide-in-left">
            <figure className="iphone-hardware"></figure>
            <figure className="iphone-screen">
              <div className="screen-nav">
                <div className="gf-screen-logo"><img src="images/gf-screen-logo.png" srcSet="images/gf-screen-logo@2x.png 2x" /></div>
                <div className="gf-screen-nav-button"><img src="images/gf-screen-nav-button.png" srcSet="images/gf-screen-nav-button@2x.png 2x" /></div>
              </div>
              <div className="screen-services-container" parallax="ribbon-services">

                <div className="gf-screen-service-01 gf-screen-service-circle"><img src="images/gf-screen-service-01.png" srcSet="images/gf-screen-service-01@2x.png 2x" /></div>
                <div className="gf-screen-ribbon"><img src="images/gf-screen-ribbon.png" srcSet="images/gf-screen-ribbon@2x.png 2x" /></div>
                
                <div className="gf-screen-service-plus-white-01"><img src="images/gf-screen-service-plus-white.png" srcSet="images/gf-screen-service-plus-white@2x.png 2x" /></div>
                <div className="gf-screen-service-02 gf-screen-service-circle" parallax="service-zoom-in:shift(0%)"><img src="images/gf-screen-service-02.png" srcSet="images/gf-screen-service-02@2x.png 2x" /></div>
                <div className="gf-screen-service-plus-red-01"><img src="images/gf-screen-service-plus-red.png" srcSet="images/gf-screen-service-plus-red@2x.png 2x" /></div>
                <div className="gf-screen-service-money-white"><img src="images/gf-screen-service-money-white.png" srcSet="images/gf-screen-service-money-white@2x.png 2x" /></div>

                <div className="gf-screen-service-03 gf-screen-service-circle" parallax="service-zoom-in:shift(0%)"><img src="images/gf-screen-service-03.png" srcSet="images/gf-screen-service-03@2x.png 2x" /></div>
                <div className="gf-screen-service-plus-red-02"><img src="images/gf-screen-service-plus-red.png" srcSet="images/gf-screen-service-plus-red@2x.png 2x" /></div>
                <div className="gf-screen-service-points-white"><img src="images/gf-screen-service-points-white.png" srcSet="images/gf-screen-service-points-white@2x.png 2x" /></div>

                <div className="gf-screen-service-04 gf-screen-service-circle" parallax="service-zoom-in:shift(0%)"><img src="images/gf-screen-service-04.png" srcSet="images/gf-screen-service-04@2x.png 2x" /></div>
                <div className="gf-screen-service-points-white"><img src="images/gf-screen-service-points-white.png" srcSet="images/gf-screen-service-points-white@2x.png 2x" /></div>
                <div className="gf-screen-service-plus-red-03"><img src="images/gf-screen-service-plus-red.png" srcSet="images/gf-screen-service-plus-red@2x.png 2x" /></div>

                <div className="gf-screen-service-05 gf-screen-service-circle" parallax="service-zoom-in:shift(0%)"><img src="images/gf-screen-service-05.png" srcSet="images/gf-screen-service-05@2x.png 2x" /></div>
                <div className="gf-screen-service-points-white"><img src="images/gf-screen-service-points-white.png" srcSet="images/gf-screen-service-points-white@2x.png 2x" /></div>

                <div className="gf-screen-service-06 gf-screen-service-circle" parallax="service-zoom-in:shift(0%)"><img src="images/gf-screen-service-06.png" srcSet="images/gf-screen-service-06@2x.png 2x" /></div>
                <div className="gf-screen-service-points-white"><img src="images/gf-screen-service-points-white.png" srcSet="images/gf-screen-service-points-white@2x.png 2x" /></div>
                <div className="gf-screen-service-plus-red-04"><img src="images/gf-screen-service-plus-red.png" srcSet="images/gf-screen-service-plus-red@2x.png 2x" /></div>

                <div className="gf-screen-service-07 gf-screen-service-circle" parallax="service-zoom-in:shift(0%)"><img src="images/gf-screen-service-07.png" srcSet="images/gf-screen-service-07@2x.png 2x" /></div>
                <div className="gf-screen-service-plus-red-05"><img src="images/gf-screen-service-plus-red.png" srcSet="images/gf-screen-service-plus-red@2x.png 2x" /></div>
                <div className="gf-screen-service-plus-red-06"><img src="images/gf-screen-service-plus-red.png" srcSet="images/gf-screen-service-plus-red@2x.png 2x" /></div>

                <div className="gf-screen-service-08" parallax="service-zoom-in:shift(0%)"><img src="images/gf-screen-service-08.png" srcSet="images/gf-screen-service-08@2x.png 2x" /></div>
              
              </div>
              <div className="gf-screen-app-buttons"><img src="images/gf-screen-app-buttons.png" srcSet="images/gf-screen-app-buttons@2x.png 2x" alt="" /></div>
              <div className="gf-screen-circle-red"></div>
            </figure>
            <figure className="iphone-shadow"></figure>
          </div>
          <div className="gf-circle-grey" parallax="zoom-in zoom-in:reverse"></div>
        </div>
        <div className="column right">
          <div className="section-title">
            <h1 className="title color-red"><span className="highlight hl1"><i parallax="reveal-left-in:shift(-30%)">Pagá</i>Pagá</span> todas tus facturas y <span className="highlight hl2"><i parallax="reveal-left-in">recargá</i>recargá</span> tus servicios</h1>
          </div>
          <div className="section-description">
            <p className="description"><b>Luz, Agua, Gas, Internet...</b><br />lo que necesites sin hacer filas <br />ni moverte de tu casa.</p>
          </div>
          <a href="#s5" className="btn-arrow"><img src="images/icon-arrow-down-red.png" srcSet="images/icon-arrow-down-red@2x.png 2x" alt="Scroll Down" /></a>
        </div>
      </div>
      <div className="gf-plus-green"><img src="images/gf-plus-green.png" srcSet="images/gf-plus-green@2x.png 2x" /></div>
      <div className="gf-money-grey"><img src="images/gf-money-grey.png" srcSet="images/gf-money-grey@2x.png 2x" /></div>
      <div className="gf-ticket-green"><img src="images/gf-ticket-green.png" srcSet="images/gf-ticket-green@2x.png 2x" /></div>
      <div className="gf-bill-green"><img src="images/gf-bill-green.png" srcSet="images/gf-bill-green@2x.png 2x" /></div>
      <div className="gf-money-grey-2"><img src="images/gf-money-grey.png" srcSet="images/gf-money-grey@2x.png 2x" /></div>
      <div className="gf-dash-grey"><i></i><i></i><i></i></div>
    </ParallaxSection>
  );
}

export default FourthSection;
