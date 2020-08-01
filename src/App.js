// eslint-disable jsx-a11y/anchor-is-valid
import React from "react";
import jqueryParallax from "./jquery.parallax";
import FirstSection from "./Sections/First";
import SecondSection from "./Sections/Second";
import ThirdSection from "./Sections/Third";
import FourthSection from "./Sections/Fourth";
import FifthSection from "./Sections/Fifth";
import SixthSection from "./Sections/Sixth";
import SeventhSection from "./Sections/Seventh";
import EighthSection from "./Sections/Eighth";
import Footer from "./Components/Footer";
import Paginator from "./Components/Paginator";

function App() {
  React.useEffect(() => {
    jqueryParallax();
  }, []);

  return (
    <div>
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
      <SeventhSection />
      <EighthSection />
      <Footer />
      <Paginator />
      
    </div>
  );
}

export default App;

// eslint-enable