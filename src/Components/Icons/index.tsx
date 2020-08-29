import React from 'react';

interface IconProps {
  color: string;
  hideInMobile?: boolean;
  iconKey?: string;
}

interface GreenCircleProps {
  animation: string;
}

const Bars = ({ color = 'green', hideInMobile = false }: IconProps ) => {
    const barClassNames = `icon icon__bars--${color} ${
        hideInMobile ? 'hide-in-mobile' : null
    }`;
    return <div className={barClassNames}>//</div>;
};

const Box = ({ color = 'red' }: IconProps ) => (
    <div className={`gf-box-small-${color}`} />
);

const Dash = ({ color = 'green' }: IconProps ) => (
    <div className={`gf-dash-${color}`}>
        <i />
        <i />
        <i />
    </div>
);

const Plus = ({ color = 'green', iconKey }: IconProps ) => {
    let plusClassNames = `gf-plus-${color}`;
    if ( iconKey ) {
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

const GreenCircle = ({ animation }: GreenCircleProps ) => {
    const parallaxProps = animation
        ? {
            parallax: animation
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
    Plus
};

export default Icons;
