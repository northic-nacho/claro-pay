import React from "react";

interface ArrowButtonProps {
  to: string;
}

const ArrowButton = ({ to }: ArrowButtonProps) => {
  return (
    <a href={to} className="btn-arrow">
      <img
        src="images/icon-arrow-down-red.png"
        srcSet="images/icon-arrow-down-red@2x.png 2x"
        alt="Scroll Down"
      />
    </a>
  );
};

export default ArrowButton;
