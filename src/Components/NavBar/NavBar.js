import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import MenuIcon from "@mui/icons-material/Menu";
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
  Typography,
  useMediaQuery,
} from "@mui/material";
import CountrySelect from "./GeoSelect/CountrySelect";
import CurrencySelect from "./CurrencySelect/CurrencySelect";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import { ReactComponent as Logo } from "../../Assets/SVG/logo.svg";
import MenuDropdown from "./MenuDropdown/MenuDropdown";
import {
  exploreMenuItems,
  agentsMenuItems,
  profileMenuItems,
  isMediumScreens,
} from "../../Constants/ConstantValues";
import ErrorBoundaryFallBack from "../ErrorBoundaries/ErrorBoundaries";
import { addLikedFlag, base64ToObj, objToBase64 } from "../../utils/utility";
import { getUserDetails, userLogout } from "../../network/apiServices";
import { isEqual } from "lodash";
import AppContext from "../../context/AppContext";

function NavBar() {
  const context = useContext(AppContext);

  const {
    userObj,
    listings,
    setUserObj,
    setUserPreferences,
    setListingHash,
    setBuildingHash,
    setBuyOrRent,
    navLinkBuyOrRent,
  } = context;

  // const [exploreAnchorEl, setExploreAnchorEl] = useState(null);
  const [agentsAnchorEl, setAgentsAnchorEl] = useState(null);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isAgentsHovered, setIsAgentsHovered] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentURL = window.location.href;

  useEffect(() => {
    try {
      const userObject = base64ToObj(localStorage.getItem("user_details"));
      setUserObj(userObject);
    } catch (err) {}
  }, [setUserObj]);

  useEffect(() => {
    if (userObj) {
      getUserDetails({ email: userObj?.email })
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            setUserPreferences(res.data);
            const likedListings = addLikedFlag(
              res.data.savedProperties,
              "listingReferenceId"
            );
            const likedBuildings = addLikedFlag(
              res.data.savedBuildings,
              "buildingReferenceId"
            );
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setListingHash(likedListings);
            setBuildingHash(likedBuildings);
          }
        })
        .catch((err) => {});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userObj, listings]);

  const handleLogout = () => {
    if (userObj) {
      let data = {
        username: userObj?.email,
      };

      userLogout(data)
        .then((data) => {
          if (isEqual(data.data.status, "SUCCESS")) {
            localStorage.setItem("app_reference", null);
            localStorage.setItem("user_details", null);
            setUserObj(null);

            const currentPath = location.pathname;
            if (isEqual(currentPath, "/")) {
              navigate(0);
            } else {
              navigate("/");
            }
          }
        })
        .catch((error) => {
          // console.log("Logout Error: ", error);
        });
    }
  };

  // Function to handle menu open
  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  // Function to handle menu close
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleExploreClick = (event) => {
    // setExploreAnchorEl(event.currentTarget);
    setIsExploreHovered(true);
    handleMenuClose()
  };

  const handleAgentsClick = (event) => {
    setAgentsAnchorEl(event.currentTarget);
    // setIsHovered(true)
    setIsAgentsHovered(true);
    handleMenuClose()
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
    // setIsHovered(true)
    setIsProfileHovered(true);
    handleMenuClose()
  };

  const handleClose = () => {
    // setExploreAnchorEl(null);
    setAgentsAnchorEl(null);
    setProfileAnchorEl(null);
    setIsExploreHovered(false);
    setIsAgentsHovered(false);
    setIsProfileHovered(false);
  };
  const goToPageOnClick = () => {
    navigate("/");
  };
  const handleBuyRentClick = (event, value) => {
    setBuyOrRent(value);
    const queryParamValue = objToBase64({ buyOrRent: value });

    navigate(`/${value}/search?value=${queryParamValue}`);
    navigate(0);
  };

  const isMediumScreen = useMediaQuery(isMediumScreens);
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <AppBar position="sticky">
          <Container maxWidth="xl" className="homeLink" id="homeLink">
            <Toolbar className="navToolBar">
              <Box className="alignBox">
                <Box className="logoInnerBox" onClick={goToPageOnClick}>
                  <Logo />
                </Box>
              </Box>

              <Box className="alignBox hidden-xs show-md">
                <CountrySelect isDrawerOpen={menuOpen} />
                <Box className="navBarOpt">
                  <Toolbar>
                    <LinkItem
                      value="buy"
                      onClick={handleBuyRentClick}
                      customClass={
                        navLinkBuyOrRent === "buy" && currentURL.includes("buy")
                          ? "menuItemActive"
                          : ""
                      }
                    >
                      Buy
                    </LinkItem>
                    <LinkItem
                      value="rent"
                      onClick={handleBuyRentClick}
                      customClass={
                        navLinkBuyOrRent === "rent" &&
                        currentURL.includes("rent")
                          ? "menuItemActive"
                          : ""
                      }
                    >
                      Rent
                    </LinkItem>
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

                    {userObj ? (
                      <MenuDropdown
                        customClass="profileNameMenu"
                        buttonTitle={userObj?.firstName}
                        anchorEl={profileAnchorEl}
                        handleClick={handleProfileClick}
                        handleClose={handleClose}
                        menuItems={profileMenuItems}
                        isHovered={isProfileHovered}
                        titleIcon={"accountCircle"}
                        iconVariant={"light"}
                      >
                        <Link className="headerLink" onClick={handleLogout}>
                          <li className="liChild">
                            <Typography variant="DubaiRegular16">
                              Sign out
                            </Typography>
                          </li>
                        </Link>
                      </MenuDropdown>
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
                    <LinkItem value="buy" onClick={handleBuyRentClick}>
                      Buy
                    </LinkItem>
                    <LinkItem value="buy" onClick={handleBuyRentClick}>
                      Rent
                    </LinkItem>
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
                    {userObj ? (
                      <MenuDropdown
                        customClass="profileNameMenu"
                        buttonTitle={userObj?.firstName}
                        anchorEl={profileAnchorEl}
                        handleClick={handleProfileClick}
                        handleClose={handleClose}
                        menuItems={profileMenuItems}
                        isHovered={isProfileHovered}
                        titleIcon={"accountCircle"}
                        iconVariant={"dark"}
                      >
                        <Link className="headerLink" onClick={handleLogout}>
                          <li className="liChild">
                            <Typography variant="DubaiRegular16">
                              Sign out
                            </Typography>
                          </li>
                        </Link>
                      </MenuDropdown>
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
