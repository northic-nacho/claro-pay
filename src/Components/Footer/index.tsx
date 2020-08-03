import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid d-flex align-items-center">
        <div className="footer-brand">
          <img
            src="images/logo-claro-white-footer.png"
            srcSet="images/logo-claro-white-footer@2x.png 2x"
            alt=""
          />
        </div>
        <p className="nav-text">Todos los derechos reservados. Claro 2018</p>
      </div>
    </footer>
  );
};

export default Footer;
