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
import NavBar from "./Components/NavBar";

import './index.scss';

function App() {
  React.useEffect(() => {
    jqueryParallax();
  }, []);

  return (
    <div>
      <NavBar />
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