import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "../Components/NavBar/NavBar";
import LandingPageBody from "../Pages/LandingPage/LandingPageBody";
import FooterComponent from "../Components/Footer/FooterComponent";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";
import customTheme from "../Theme/AppParentComponentTheme";
import ErrorBoundaryFallBack from "../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import ListingDetailPage from "../Pages/ListingDetailPage/ListingDetailPage";
import BuildingDetailPage from "../Pages/BuildingDetailPage/BuildingDetailPage";
import SignIn from "../Pages/AuthPages/SignIn/SignIn";
import TermsAndPolicy from "../Pages/AuthPages/TermsAndPolicy/TermsAndPolicy";
import BecomeAnAgent from "../Pages/BecomeAnAgent/BecomeAnAgent";
import ForgotPassword from "../Pages/AuthPages/ForgotPassword/ForgotPassword";
import SpecificNeighbourhood from "../Components/SpecificNeighbourhood/SpecificNeighbourhood";
import Profile from "../Pages/Profile/Profile";

function AppParentComponent() {
  const renderLayout = (component, showFooter = true, showPrivacy = false) => (
    <>
      <NavBar />
      {component}
      {showFooter ? <FooterComponent /> : null}
      {showPrivacy ? <TermsAndPolicy /> : null}
    </>
  );

  return (
    <ThemeProvider theme={customTheme}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Routes>
          {/* Auth */}
          <Route
            path="/signin"
            element={renderLayout(<SignIn />, false, true)}
          />
          <Route path="/login" element={renderLayout(<Login />, false, true)} />
          <Route
            path="/forgot-password"
            element={renderLayout(<ForgotPassword />, false, true)}
          />
          <Route
            path="/register"
            element={renderLayout(<Register spacing={5} />, false, true)}
          />
          <Route
            path="/profile"
            element={renderLayout(<Profile />, true, false)}
          />

          {/* Auth */}

          <Route
            path="/"
            element={renderLayout(<LandingPageBody spacing={5} />)}
          />
          <Route
            path="/listing/:id/:name"
            element={renderLayout(<ListingDetailPage spacing={5} />)}
          />
          <Route
            path="/building/:id/:name"
            element={renderLayout(<BuildingDetailPage spacing={5} />)}
          />
          <Route
            path="/specificneighbourhood/:name"
            element={renderLayout(<SpecificNeighbourhood />)}
          />
          <Route
            path="/BecomeAnAgent"
            element={renderLayout(<BecomeAnAgent />)}
          />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
export default AppParentComponent;
