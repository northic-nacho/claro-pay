import React from 'react';
import Image from '../Image';

const ScreenElement = ({ className, image, parallax }) => {
  const parallaxProps = {
    parallax: parallax ? parallax : null
  };
  return (
    <Image
      className={className}
      image={image}
      {...parallaxProps}
    />
  );
}

export default ScreenElement;
