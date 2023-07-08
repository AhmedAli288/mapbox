import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";

function ViewAllExclusivesButton() {
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState(true);

  const handleMouseEvent = () => {
    setExclusivesButtonHovered(!exclusivesButtonHovered);
  };
  
  return (
    <Box className="viewAllExclusivesButtonWrapper">
      <CustomButton
        text="View all Exclusives"
        rightIcon={<ButtonRightArrow />}
        onMouseEnter={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
        dark={exclusivesButtonHovered}
        variant="outlined"
        customClassName="viewAllExclusiveButton"
      />
    </Box>
  );
}

export default ViewAllExclusivesButton;
