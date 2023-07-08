import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import LinkItem from "./LinkItem/LinkItem";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  IconButton,
  Drawer,
  Divider,
  List,
} from "@mui/material";
import CountrySelect from "./GeoSelect/CountrySelect";
import { ReactComponent as Logo } from "../../Assets/SVG/logo.svg";
import CurrencySelect from "./CurrencySelect/CurrencySelect";
import MenuDropdown from "./MenuDropdown/MenuDropdown";
import {
  exploreMenuItems,
  agentsMenuItems,
  profileMenuItems,
  isMediumScreens,
} from "../../Constants/ConstantValues";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import ErrorBoundaryFallBack from "../ErrorBoundaries/ErrorBoundaries";
import { base64ToObj } from "../../utils/utility";

function NavBar() {
  const [exploreAnchorEl, setExploreAnchorEl] = useState(null);
  const [agentsAnchorEl, setAgentsAnchorEl] = useState(null);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isAgentsHovered, setIsAgentsHovered] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu open
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  // Function to handle menu close
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const handleExploreClick = (event) => {
    setExploreAnchorEl(event.currentTarget);
    setIsExploreHovered(true);
  };

  const handleAgentsClick = (event) => {
    setAgentsAnchorEl(event.currentTarget);
    // setIsHovered(true)
    setIsAgentsHovered(true);
  };
  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
    // setIsHovered(true)
    setIsProfileHovered(true);
  };

  const handleClose = () => {
    setExploreAnchorEl(null);
    setAgentsAnchorEl(null);
    setProfileAnchorEl(null);
    setIsExploreHovered(false);
    setIsAgentsHovered(false);
    setIsProfileHovered(false);
  };

  // Use useMediaQuery to determine the screen width
  const isMediumScreen = useMediaQuery(isMediumScreens);
  let userObj;
  try {
    userObj = base64ToObj(localStorage.getItem("user_details"));
  } catch (err) {
    // console.log("err obj is: ", err);
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <AppBar position="sticky">
          <Container maxWidth="xl" className="homeLink" id="homeLink">
            <Toolbar className="navToolBar">
              <Box className="alignBox">
                <Link to="/">
                  <Box className="logoInnerBox">
                    <Logo />
                  </Box>
                </Link>
              </Box>

              <Box className="alignBox hidden-xs show-md">
                <CountrySelect isDrawerOpen={menuOpen} />
                <Box className="navBarOpt">
                  <Toolbar>
                    <LinkItem to="/buy">Buy</LinkItem>
                    <LinkItem to="/sell">Sell</LinkItem>
                    <LinkItem to="/commercial">Commercial</LinkItem>
                    <MenuDropdown
                      buttonTitle="Explore"
                      menuItems={exploreMenuItems}
                    />
                    <MenuDropdown
                      buttonTitle="Agents"
                      anchorEl={agentsAnchorEl}
                      handleClick={handleAgentsClick}
                      handleClose={handleClose}
                      menuItems={agentsMenuItems}
                      isHovered={isAgentsHovered}
                    />
                    <LanguageSelect isDrawerOpen={menuOpen} />
                    {userObj && userObj.loggedIn ? (
                      <MenuDropdown
                        buttonTitle={userObj.fullName}
                        anchorEl={profileAnchorEl}
                        handleClick={handleProfileClick}
                        handleClose={handleClose}
                        menuItems={profileMenuItems}
                        isHovered={isProfileHovered}
                        titleIcon={"accountCircle"}
                        iconVariant={"light"}
                      />
                    ) : (
                      <LinkItem to="/signin">Sign in</LinkItem>
                    )}
                    <CurrencySelect isDrawerOpen={menuOpen} />
                  </Toolbar>
                </Box>
              </Box>
              {isMediumScreen && (
                <IconButton onClick={handleMenuOpen}>
                  <MenuIcon className="hamburgMenu" />
                </IconButton>
              )}

              <Drawer
                anchor="right"
                open={menuOpen}
                onClose={handleMenuClose}
                className="drawer"
              >
                <Box className="drawerIndex">
                  <CountrySelect className="drawer" />
                  <Divider />
                  <List>
                    <LinkItem to="/buy">Buy</LinkItem>
                    <LinkItem to="/sell">Sell</LinkItem>
                    <LinkItem to="/commercial">Commercial</LinkItem>
                  </List>
                  <Divider />
                  <List>
                    <MenuDropdown
                      buttonTitle="Explore"
                      handleClick={handleExploreClick}
                      handleClose={handleClose}
                      menuItems={exploreMenuItems}
                      isHovered={isExploreHovered}
                    />
                    <MenuDropdown
                      buttonTitle="Agents"
                      handleClick={handleAgentsClick}
                      handleClose={handleClose}
                      menuItems={agentsMenuItems}
                      isHovered={isAgentsHovered}
                    />
                    <Divider />
                    <LanguageSelect isDrawerOpen={menuOpen} />
                    <Divider />
                    {userObj && userObj.loggedIn ? (
                      <MenuDropdown
                        buttonTitle={userObj.fullName}
                        anchorEl={profileAnchorEl}
                        handleClick={handleProfileClick}
                        handleClose={handleClose}
                        menuItems={profileMenuItems}
                        isHovered={isProfileHovered}
                        titleIcon={"accountCircle"}
                        iconVariant={"dark"}
                      />
                    ) : (
                      <LinkItem to="/signin">Sign in</LinkItem>
                    )}
                  </List>
                  <Divider />
                  <CurrencySelect className="drawer" />
                </Box>
              </Drawer>
            </Toolbar>
          </Container>
        </AppBar>
      </ErrorBoundary>
    </>
  );
}
export default NavBar;
