import React from "react";

import { Link } from "react-router-dom";

function ErrorBoundaryFallBack({ error, resetErrorBoundary }) {
  return (
    <section id="not-found" role="alert">
      <div className="circles">
        <p>
          Ops! <br></br>
          <small>something Went wrong</small>
          <Link to="/">
            <button to="/">
            <Link to="/">
              Go Back
              </Link>
              </button>
          </Link>
        </p>
        <details
          style={{ whiteSpace: "pre-wrap", color: "black" }}
          className="title"
        >
          {error && error.toString()}
          <br />
          {error.message}
        </details>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
    </section>
  );
}

export default ErrorBoundaryFallBack;
