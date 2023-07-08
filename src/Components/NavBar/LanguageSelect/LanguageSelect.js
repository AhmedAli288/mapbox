import React, { useState } from "react";
import SelectComponent from "../../Select/SelectComponent";
import { languageMenuItems } from "../../../Constants/ConstantValues";
const LanguageSelect = () => {
  const initial ="English";
  const [selectedCountry, setSelectedCountry] = useState(initial);

  const handleCountryChange = (selectedItem) => {    
    setSelectedCountry(selectedItem);
  };

  const items = languageMenuItems.map((languageMenuItem) => ({
    value: languageMenuItem.language,
    label: languageMenuItem.language,   
  }));
 
 
  return (
    <SelectComponent
      value={selectedCountry}
      onChange={handleCountryChange}
      items={items}
    
    />
   
  );
};
export default LanguageSelect;