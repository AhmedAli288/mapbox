import { Typography } from "@mui/material";
import { CountryFlags } from "../../Assets/SVG/Flags/Flags";
import { currencies } from "../../Assets/SVG/Currency/Currency";
import { languageMenuItems } from "../../Constants/ConstantValues";
import LanguageIcon from "@mui/icons-material/Language";
import { CallingCountryCodes } from "../../Assets/SVG/Flags/CallingCountryCodes/CallingCountryCodes";


const FlagWithLabel = ({ flagComponent, name }) => (

 
  <>
  
    <Typography variant="DubaiRegular16" className="flagRenderPadding" mr={1}>
      {" "}
      {flagComponent}
    </Typography>{" "}
    {name ? <span className="flag-name">{name}</span> : <></>}
  </>
);

export const FlagRenderValue = ({ value }) => {
  const _=require('lodash')
  const matchingItem = CountryFlags.find((itemFlag) => _.isEqual(itemFlag.name,value));
  const matchingCurrency = currencies.find((currency) =>_.isEqual(currency.code === value) );
  const isLanguage = languageMenuItems.some((language) =>_.isEqual( language.language, value));
  const callingCountryCode = CallingCountryCodes.find((countryCode) =>_.isEqual( countryCode.phoneCode, value));

  if (matchingItem) {
    const editedValue = [
      "France",
      "Mexico",
      "United Arab Emirates",
      "United States of America",
      "Canada",
      "Switzerland",
    ].includes(value) ? (
      <FlagWithLabel
        flagComponent={matchingItem.flag}
        name={matchingItem.name}
      />
    ) : (
      value
    );
    return editedValue;
  } else if (matchingCurrency) {
    return (
      <FlagWithLabel
        flagComponent={matchingCurrency.flag}
        name={matchingCurrency.name}
      />
    );
  } else if (isLanguage) {
    return (
      <FlagWithLabel
        flagComponent={<LanguageIcon className="languageIcon" />}
        name={null}
      />
    );
  } else if (callingCountryCode) {
    return (
      <FlagWithLabel
        flagComponent={callingCountryCode.flag}
        name={`+${callingCountryCode.phoneCode}`}
      />
    );
  }

  return value;
};

