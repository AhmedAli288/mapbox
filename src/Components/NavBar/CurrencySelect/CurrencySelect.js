import React, { useState } from "react";
import SelectComponent from "../../Select/SelectComponent";
import  {currencies }from '../../../Assets/SVG/Currency/Currency'
import { defaultCurrency } from "../../../Constants/ConstantValues";

const CurrencySelect = () => {
  const initialSelectedCurrency = defaultCurrency
  const [selectedCurrency, setSelectedCurrency] = useState(
    initialSelectedCurrency
  );

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const items = currencies.map((country) => ({
    value: `${country.currency } ${country.currencySymbol}`,
    label: country.currency,
    icon: country.flag,
    symbol: country.currencySymbol,
  }));

  return (
    <SelectComponent
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      items={items}
      currencyOptionsClassName={'currencyOptionsClassName'}

    />
  );
};

export default CurrencySelect;
