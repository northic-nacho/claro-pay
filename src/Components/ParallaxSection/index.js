import React from 'react';
import './styles.scss';

const ParallaxSection = React.forwardRef(
    ({ id, children, parallax = '' }, ref ) => {
        const rest = parallax ? { parallax } : {};
        return (
            <section
                id={id}
                className="section"
                role="parallax-container"
                {...rest}
                ref={ref}
            >
                <div
                    parallax="anim-stage"
                    id={`anim-stage-${id}`}
                    className="anim-stage"
                >
                    {children}
                </div>
            </section>
        );
    }
);

export default ParallaxSection;
