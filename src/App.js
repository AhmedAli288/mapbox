import React from "react";
import "./Styles/main.css";
import "./Styles/footerStyles.css";
import "./Styles/headerStyles.css";
import "./Styles/searchMap.css";

import AppParentComponent from "../src/Routes/AppParentComponent";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "./Components/ErrorBoundaries/ErrorBoundaries";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <div className="App">
        <AppParentComponent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
