import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { FiLoader } from "react-icons/fi";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Suspense
    fallback={
      <div className="cer">
        <FiLoader className="load" style={{ fontSize: "3rem" }} />
      </div>
    }
  >
    <App />
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
