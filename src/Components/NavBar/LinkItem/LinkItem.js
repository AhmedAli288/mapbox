import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";

function LinkItem(props) {
  const { to, children } = props;
  return (
    <MenuItem  variant="DubaiRegular16" component={Link} to={to} id='linkItem'>
      <Typography textAlign="center" variant="DubaiRegular16">{children}</Typography>
    </MenuItem>
  );
}

export default LinkItem;