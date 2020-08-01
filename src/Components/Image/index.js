import React from 'react'

const Image = ({ className, image, parallax }) => {
  const parallaxProps = {
    parallax: parallax ? parallax : null
  };
  return (
    <div className={className} {...parallaxProps}>
      <img
        src={`images/${image}.png`}
        srcSet={`images/${image}@2x.png 2x`}
        alt=""
      />
    </div>
  )
}

export default Image
