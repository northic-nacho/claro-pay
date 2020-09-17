import React from 'react';

interface IconProps {
  color: string;
  hideInMobile?: boolean;
  iconKey?: string;
}

interface RedCircleProps {
  animation: string;
}

const Bars = ({ color = 'green', hideInMobile = false }: IconProps ) => {
    const barClassNames = `icon icon-bars--${color} ${
        hideInMobile ? 'hide-in-mobile' : ''
    }`;
    return <div className={barClassNames}>//</div>;
};

const Box = ({ color = 'red' }: IconProps ) => (
    <div className={`icon icon-box--${color}`} />
);

const Dash = ({ color = 'green' }: IconProps ) => (
    <div className={`icon-dash--${color}`}>
        <i />
        <i />
        <i />
    </div>
);

const Plus = ({ color = 'green', iconKey }: IconProps ) => {
    let plusClassNames = `icon-plus--${color}`;
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

const RedCircle = ({ animation }: RedCircleProps ) => {
    const parallaxProps = animation
        ? {
            parallax: animation
        }
        : {};

    return (
        <div className="icon-circle-wipe--red">
            <div className="circle-spinner" {...parallaxProps} />
        </div>
    );
};

const Icons = {
    Bars,
    Box,
    Dash,
    RedCircle,
    Plus
};

export default Icons;
