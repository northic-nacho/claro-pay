import React from "react";
import "./styles.scss";

const Loader = () => (
  <div className="loading">
    <div className="loading__container">
      <img
        src="images/logo-claropay-header.png"
        srcSet="images/logo-claropay-header@2x.png 2x"
        alt="Claro Pay"
      />
      <br />
      <img className="loading__gif" alt="" src="images/loading.gif" />
    </div>
  </div>
);

export default Loader;
