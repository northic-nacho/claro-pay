import React from "react";

const Bars = ({ color = "green", hideInMobile = false }) => {
  const barClassNames = `gf-bars-${color} ${
    hideInMobile ? "ocultar-mobile" : null
  }`;
  return <div className={barClassNames}>//</div>;
};

const Box = ({ color = "red" }) => <div className={`gf-box-small-${color}`} />;

const Dash = ({ color = "green" }) => (
  <div className={`gf-dash-${color}`}>
    <i />
    <i />
    <i />
  </div>
);

const Plus = ({ color = "green", iconKey }) => {
  let plusClassNames = `gf-plus-${color}`;
  if (iconKey) {
    plusClassNames += `-${iconKey}`;
  }
  return (
    <div className={plusClassNames}>
      <img
        src={`images/gf-plus-${color}.png`}
        srcSet={`images/gf-plus-${color}@2x.png 2x`}
        alt=""
      />
    </div>
  );
};

const GreenCircle = ({ animation }) => {
  const parallaxProps = animation
    ? {
        parallax: animation,
      }
    : {};

  return (
    <div className="gf-circle-wipe-green">
      <div className="circle-spinner" {...parallaxProps} />
    </div>
  );
};

const Icons = {
  Bars,
  Box,
  Dash,
  GreenCircle,
  Plus,
};

export default Icons;
