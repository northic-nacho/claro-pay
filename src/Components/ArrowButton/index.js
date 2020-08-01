import React from 'react'

const ArrowButton = ({ to }) => {
  return (
    <a href={to} className="btn-arrow">
      <img
        src="images/icon-arrow-down-red.png"
        srcSet="images/icon-arrow-down-red@2x.png 2x"
        alt="Scroll Down"
      />
    </a>
  );
}

export default ArrowButton
