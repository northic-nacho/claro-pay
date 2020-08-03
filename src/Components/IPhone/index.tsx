import React from "react";

interface IPhoneProps {
  className: string;
  containerParallax: string;
  showScreen: boolean;
  showScreenNav: boolean;
  screenParallax: string;
  children: JSX.Element;
}

const IPhone = ({
  className,
  containerParallax,
  showScreen,
  showScreenNav,
  screenParallax,
  children,
}: IPhoneProps) => {
  const containerProps = containerParallax
    ? { parallax: containerParallax }
    : {};
  const screenProps = screenParallax ? { parallax: screenParallax } : {};

  return (
    <div className={`iphone-image-group ${className}`} {...containerProps}>
      <figure className="iphone-hardware" />
      {showScreen ? (
        <figure className="iphone-screen" {...screenProps}>
          {showScreenNav ? (
            <div className="screen-nav">
              <div className="gf-screen-logo">
                <img
                  src="images/gf-screen-logo.png"
                  srcSet="images/gf-screen-logo@2x.png 2x"
                  alt=""
                />
              </div>
              <div className="gf-screen-nav-button">
                <img
                  src="images/gf-screen-nav-button.png"
                  srcSet="images/gf-screen-nav-button@2x.png 2x"
                  alt=""
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {children}
        </figure>
      ) : (
        ""
      )}
      <figure className="iphone-shadow" />
    </div>
  );
};

export default IPhone;
