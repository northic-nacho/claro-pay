import React from "react";

interface ImageProps {
  className: string;
  image: string;
  parallax?: string;
}

const Image = ({ className, image, parallax }: ImageProps) => {
  const parallaxProps = {
    parallax: parallax || undefined,
  };
  return (
    <div className={className} {...parallaxProps}>
      <img
        src={`images/${image}.png`}
        srcSet={`images/${image}@2x.png 2x`}
        alt=""
      />
    </div>
  );
};

export default Image;
