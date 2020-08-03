import React from "react";
import Image from "../Image";

interface ScreenElementProps {
  className: string;
  image: string;
  parallax: string;
}

const ScreenElement = ({ className, image, parallax }: ScreenElementProps) => {
  const parallaxProps = {
    parallax: parallax ? parallax : undefined,
  };
  return <Image className={className} image={image} {...parallaxProps} />;
};

export default ScreenElement;
