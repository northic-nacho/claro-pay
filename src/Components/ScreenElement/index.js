import React from 'react'

const ScreenElement = ({ className, image, parallax}) => {
  const parallaxPropx = {
    parallax: parallax ? parallax : null
  };
  return (
    <div
      className={className}
      {...parallaxPropx}
    >
      <img
        src={`images/${image}.png`}
        srcSet={`images/${image}@2x.png 2x`}
        alt=""
      />
    </div>
  );
}

export default ScreenElement;
