// eslint-disable jsx-a11y/anchor-is-valid
import React, { useState, useEffect } from "react";
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
import NavBar from "./Components/NavBar";

import "./styles/index.scss";

function App() {
  useEffect(() => {
    jqueryParallax();
  }, []);

  const [isOnLastSection, setIsOnLastSection] = useState(false);

  return (
    <div className="app-container">
      <NavBar isOnLastSection={isOnLastSection} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection setIsOnLastSection={setIsOnLastSection} />
      <Footer />
      <Paginator />
    </div>
  );
}

export default App;

// eslint-enable
