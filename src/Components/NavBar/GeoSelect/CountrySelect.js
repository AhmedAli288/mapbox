import React, { useState } from "react";
import SelectComponent from "../../Select/SelectComponent";
import { CountryFlags } from "../../../Assets/SVG/Flags/Flags";
import { defaultCountry } from "../../../Constants/ConstantValues";

const CountrySelect = () => {
  const initial = defaultCountry;
  const [selectedCountry, setSelectedCountry] = useState(initial);

  const handleCountryChange = (selectedItem) => {
    setSelectedCountry(selectedItem);
  };
  // console.log(CountryFlags)
  const items = CountryFlags.map((country) => ({
    value: country.name,
    label: country.name,
    icon: country.flag,
  }));

  return (
    <SelectComponent
      value={selectedCountry}
      onChange={handleCountryChange}
      items={items}
      
    />
  );
};

export default CountrySelect;
