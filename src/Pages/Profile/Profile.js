import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Container, Typography } from "@mui/material";
import { ScrollDownBtnIcon } from "../../Assets/SVG/Common/CommonSvgs";
import MySettings from "./MySettings/MySettings";
import SearchNotifications from "./SearchNotifications/SearchNotifications";
import ChangePassword from "./ChangePassword/ChangePassword";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState("My Settings");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    if (index === 0) {
      setMenuOpen(false);
    }
  };

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const handleClick = (event) => {
    setSelectedMenuItem(event.target.innerText);
    setMenuOpen(false);
  };

  return (
    <Container className="profileContainer">
      <Box className="profilePic">
        <LazyLoadImage src="/images/Avatar.jpg" height={"25%"} width={"15%"} />
        <Typography variant="GothamBlack24Bold">Tyrion Lannister</Typography>
      </Box>

      <Box className="profileTabs">
        <div className="tabsContainer">
          <div
            className={`tabItem ${selectedTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className=" menuDropdownButton profileTab">
              <span>
                <Typography variant="DubaiRegular18" mr={1}>
                  Menu
                </Typography>
                <ScrollDownBtnIcon />
              </span>
              {menuOpen && (
                <div className="menuDropdown">
                  <span onClick={handleClick} className="profileMenuItem">
                    <Typography variant="DubaiRegular16">
                      My Settings
                    </Typography>
                  </span>
                  <span onClick={handleClick} className="profileMenuItem">
                    <Typography variant="DubaiRegular16">
                      Search Notifications
                    </Typography>
                  </span>
                  <span onClick={handleClick} className="profileMenuItem">
                    <Typography variant="DubaiRegular16">
                      Change Password
                    </Typography>
                  </span>
                  <span onClick={handleClick} className="profileDeleteBtn">
                    <Typography variant="DubaiRegular16">
                      Delete Account
                    </Typography>
                  </span>
                </div>
              )}
            </span>
          </div>
          <div
            className={`tabItem profileTab ${
              selectedTab === 1 ? "active" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            <Typography variant="DubaiRegular18">Saved Properties</Typography>
          </div>
          <div
            className={`tabItem profileTab ${
              selectedTab === 2 ? "active" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            <Typography variant="DubaiRegular18">Saved Buildings</Typography>
          </div>
          <div
            className={`tabItem profileTab ${
              selectedTab === 3 ? "active" : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            <Typography variant="DubaiRegular18">Saved Searches</Typography>
          </div>
          <div
            className={`tabItem profileTab ${
              selectedTab === 4 ? "active" : ""
            }`}
            onClick={() => handleTabClick(4)}
          >
            <Typography variant="DubaiRegular18">Around the Block</Typography>
          </div>
          <div
            className={`tabItem profileTab ${
              selectedTab === 5 ? "active" : ""
            }`}
            onClick={() => handleTabClick(5)}
          >
            <Typography variant="DubaiRegular18">My Agents</Typography>
          </div>
          {/* Add more tab items as needed */}
        </div>
      </Box>

      {selectedTab === 1 && <Typography>Saved Properties</Typography>}
      {selectedTab === 2 && <Typography>Saved Buildings</Typography>}
      {selectedTab === 3 && <Typography>Saved Searches</Typography>}
      {selectedTab === 4 && <Typography>Around the Block</Typography>}
      {selectedTab === 5 && <Typography>My Agents</Typography>}

      {selectedTab === 0 && selectedMenuItem === "My Settings" && (
        <MySettings />
      )}
      {selectedTab === 0 && selectedMenuItem === "Search Notifications" && (
        <SearchNotifications />
      )}
      {selectedTab === 0 && selectedMenuItem === "Change Password" && (
        <ChangePassword />
      )}
      {selectedTab === 0 && selectedMenuItem === "Delete Account" && (
        <DeleteAccount />
      )}
    </Container>
  );
};

export default Profile;
