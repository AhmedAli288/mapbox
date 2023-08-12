import React from "react";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

function ErrorBoundaryFallBack({ error, resetErrorBoundary }) {
  const navigate = useNavigate();

  const goToPageOnClick = () => {
    navigate("/");
  };
  return (
    <section id="not-found" role="alert">
      <div className="circles">
        <p>
          Ops! <br></br>
          
          <small>something Went wrong</small>
        </p>
        <Grid container direction="row" justifyContent="center">
          <Grid item>
            <CustomButton onClick={goToPageOnClick} text="Go Back" />
          </Grid>
        </Grid>
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
