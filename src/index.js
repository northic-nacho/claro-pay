import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";

import App from "./App";

const Wrapper = () => {
  const [appReady, setAppReady] = React.useState(false);

  return (
    <>
      <Loader appReady={appReady} />
      <App setAppReady={setAppReady} />
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
