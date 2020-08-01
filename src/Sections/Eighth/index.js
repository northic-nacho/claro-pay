import React from "react";
import ParallaxSection from "../../Components/ParallaxSection";
import HighlightedText from "../../Components/HighlightedText";
import SectionTitle from "../../Components/SectionTitle";
import Image from "../../Components/Image";
import IPhone from "../../Components/IPhone";
import "./styles.scss";

const EighthSection = () => {
  return (
    <ParallaxSection id="s8" parallax="night-bg">
      <div parallax="anim-stage">
        <div className="content-group align-items-center">
          <div className="column left">
            <IPhone className="iphone-s4" showScreen showScreenNav>
              <div className="clock">
                <div
                  className="clockwise clockwise-black"
                  parallax="clockwise-black"
                ></div>
                <div
                  className="clockwise clockwise-white"
                  parallax="clockwise-white"
                ></div>
                <div
                  className="clockwise clockwise-purple"
                  parallax="clockwise-purple"
                ></div>
              </div>
            </IPhone>
            <Image
              className="gf-moare-left"
              image="gf-moare-grey"
            />
            <Image
              className="gf-moare-right"
              image="gf-moare-grey"
            />
          </div>
          <div className="column right">
            <SectionTitle>
              ¡Abierto
              <br />
              las <HighlightedText text="24hs" />
              <br />
              en tu celular!
            </SectionTitle>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default EighthSection;
