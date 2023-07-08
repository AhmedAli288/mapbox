import { useEffect } from "react";
import { MenuItem, ListItemIcon, Typography, Box } from "@mui/material";
import { ExpandMoreSharp, Check } from "@mui/icons-material";
import { FlagRenderValue } from "../FlagRenderValue/FlagRenderValue";

const SelectComponent = ({
  value,
  onChange,
  items,
  currencyOptionsClassName,
}) => {
  useEffect(() => {}, [value]);

  const handleOptionClick = (option) => {
    // setSelectedOption(option);

    onChange(option);
  };

  return (
    <div className="selectComponentWrapper">
      <div className="selectButtonWrapper">
        <button className="selectButton">
          {<FlagRenderValue value={value} />}
        </button>
        <ExpandMoreSharp className="expandMoreSharp" />
      </div>
      <div
        className={
          currencyOptionsClassName
            ? "currencyOptionsClassName"
            : "selectOptionsWrapper"
        }
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            className="menuItem"
            onClick={() => handleOptionClick(item.value)}
          >
            {item.value === value && (
              <ListItemIcon>
                <Check />
              </ListItemIcon>
            )}
            <Box className="itemBox">
              {item.icon}
              <Typography
                component="span"
                variant="DubaiRegular16"
                className="itemLabel"
              >
                {item.label}
              </Typography>
              {item.symbol && (
                <Typography component="span" variant="DubaiRegular16">
                  ({item.symbol})
                </Typography>
              )}
            </Box>
          </MenuItem>
        ))}
      </div>
    </div>
  );
};
export default SelectComponent;
