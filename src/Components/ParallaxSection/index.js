import React from 'react';

const ParallaxSection = ({ id, children }) => {
  return (
    <section id={id} className="section" role="parallax-container">
      {/* revisar pq la class la tiene solo la s3 */}
      <div parallax="anim-stage" id={`anim-stage-${id}`} className="anim-stage">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
