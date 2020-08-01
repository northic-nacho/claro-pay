import React from 'react';
import ParallaxSection from '../../Components/ParallaxSection';
import HighlightedText from '../../Components/HighlightedText';
import './styles.scss';

const EighthSection = () => {
  return (
    <ParallaxSection id="s8" parallax="night-bg">
      <div parallax="anim-stage">
        <div className="content-group align-items-center">
          <div className="column left">
            <div className="iphone-image-group iphone-s4">
              <figure className="iphone-hardware"></figure>
              <figure className="iphone-screen">
                <div className="screen-nav">
                  <div className="gf-screen-logo"><img src="images/gf-screen-logo.png" srcSet="images/gf-screen-logo@2x.png 2x" alt="" /></div>
                  <div className="gf-screen-nav-button"><img src="images/gf-screen-nav-button.png" srcSet="images/gf-screen-nav-button@2x.png 2x" alt="" /></div>
                </div>

                <div className="clock">
                  <div className="clockwise clockwise-black" parallax="clockwise-black"></div>
                  <div className="clockwise clockwise-white" parallax="clockwise-white"></div>
                  <div className="clockwise clockwise-purple" parallax="clockwise-purple"></div>
                </div>
              </figure>
              <figure className="iphone-shadow"></figure>
            </div>
            <div className="gf-moare-left"><img src="images/gf-moare-grey.png" srcSet="images/gf-moare-grey@2x.png 2x" alt="" /></div>
            <div className="gf-moare-right"><img src="images/gf-moare-grey.png" srcSet="images/gf-moare-grey@2x.png 2x" alt="" /></div>
          </div>
          <div className="column right">
            <div className="section-title">
              <h1 className="title color-red">¡Abierto<br />las <HighlightedText text="24hs" /><br />en tu celular!</h1>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

export default EighthSection;
