import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
