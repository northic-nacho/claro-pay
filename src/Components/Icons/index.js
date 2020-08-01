import React from 'react'

const Bars = ({ color = 'green', hideInMobile = false }) => {
  const barClassNames = `gf-bars-${color} ${hideInMobile ? 'ocultar-mobile' : null}`
  return (
    <div className={barClassNames}>{'//'}</div>
  )
};

const Plus = ({ color = 'green', iconKey = '0' }) => {
  let plusClassNames = `gf-plus-${color}`;
  if (iconKey) {
    plusClassNames += `-${iconKey}`
  }
  return (
    <div className={plusClassNames}>
      <img
        src={`images/gf-plus-${color}.png`}
        srcSet={`images/gf-plus-${color}@x.png 2x`}
        alt=""
      />
    </div>
  )
}

const GreenCircle = ({ animation }) => (
  <div className="gf-circle-wipe-green">
    <div
      className="circle-spinner"
      parallax={animation}
    ></div>
  </div>
);


const Icons = {
  Bars,
  GreenCircle,
  Plus,
}


export default Icons;
