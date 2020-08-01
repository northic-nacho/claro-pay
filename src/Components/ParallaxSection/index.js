import React from 'react';
import './styles.scss';

const ParallaxSection = ({ id, children, parallax = '' }) => {
  const rest = parallax ? { parallax } : {};
  return (
    <section id={id} className="section" role="parallax-container" {...rest} >
      {/* revisar pq la class la tiene solo la s3 */}
      <div parallax="anim-stage" id={`anim-stage-${id}`} className="anim-stage">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
