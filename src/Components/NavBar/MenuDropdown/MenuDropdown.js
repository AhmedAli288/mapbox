import { Typography } from "@mui/material";
import { ExpandMoreSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function MenuDropdown({ buttonTitle, menuItems, titleIcon, iconVariant }) {
  return (
    <>
      <ul className="ul">
        <li className="li">
          <div className="divWrapper">
            {titleIcon && <ListingCardIcon shape={titleIcon} variant={iconVariant} />}
            <Typography variant="DubaiRegular16">{buttonTitle}</Typography>
            <ExpandMoreSharp />
          </div>

          <ul className="ulChild">
            {menuItems.map((menuItem, index) => (
              <Link key={index} to={menuItem.link ? menuItem.link : "/buy"} className="headerLink">
                <li className="liChild">
                  <Typography variant="DubaiRegular16">{menuItem.title ? menuItem.title : menuItem}</Typography>
                </li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default MenuDropdown;
