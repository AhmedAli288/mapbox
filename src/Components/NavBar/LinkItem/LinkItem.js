import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";

function LinkItem(props) {
  const { to, children, value, customClass } = props;

  const handleClick = (event) => {
    props.onClick && props.onClick(event, value);
  };
  return (
    <MenuItem
      variant="DubaiRegular16"
      component={Link}
      to={to}
      id="linkItem"
      onClick={handleClick}
      value={value}
      className={customClass}
    >
      {/* {console.log(value)} */}
      <Typography textAlign="center" variant="DubaiRegular16">
        {children}
      </Typography>
    </MenuItem>
  );
}

export default LinkItem;
