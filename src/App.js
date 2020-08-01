import React from "react";
import libre from "./jquery.parallax";
import FirstSection from "./Sections/First";
import SecondSection from "./Sections/Second";
import ThirdSection from "./Sections/Third";
import FourthSection from "./Sections/Fourth";
import FifthSection from "./Sections/Fifth";
import SixthSection from "./Sections/Sixth";

function App() {
  React.useEffect(() => {
    libre();
  }, []);

  return (
    <div>
      {/* TODO revisar navbar */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-claropay">
        <a className="navbar-brand" href="#">
          <img
            id="logoHeader"
            src="images/logo-claropay-header.png"
            srcSet="images/logo-claropay-header@2x.png 2x"
            alt="Claro Pay"
          />
        </a>
        <form className="form-inline ml-auto">
          <a href="#" className="btn btn-primary btn-signup">
            Creá tu cuenta
          </a>
          <a href="#" className="btn btn-link-black btn-login">
            Entrá ahora
          </a>
          <a href="#" className="btn btn-primary btn-signup-mobile">
            Entrá ahora
          </a>
        </form>
      </nav>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <div className="paging">
        <a
          href="#s1"
          parallax="paging-button"
          parallax-container="#s1"
          title="Bienvenidos"
        ></a>
        <a
          href="#s2"
          parallax="paging-button"
          parallax-container="#s2"
          title="Con el reslapdo de Claro"
        ></a>
      </div>
    </div>
  );
}

export default App;
