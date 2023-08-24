import React, { useContext, useRef } from "react";
import SelectComponent from "../../Select/SelectComponent";
import { currencies } from "../../../Assets/SVG/Currency/Currency";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import { isMediumScreens } from "../../../Constants/ConstantValues";
const CurrencySelect = () => {
  const isMediumScreen = useMediaQuery(isMediumScreens);
  const {
    setToCurrency,
    selectedCurrency,
    setSelectedCurrency,
    setConversionRates,
    conversionRates,
  } = useContext(AppContext);
  const thirtyMinutesFromCurrentTimeStamp = useRef();

  //
  const fetchConversionRates = async () => {
    await axios
      .get("https://api.exchangerate.host/latest", {
        params: {
          base: "AED",
          symbols:
            "USD,EUR,AED,GBP,CNY,JPY,AUD,SAR,RUB,HKD,INR,BRL,BTC,ETH,ADA",
        },
      })
      .then((res) => {
        const data = res.data;
        setConversionRates(data.rates);
      })

      .catch((err) => {
        // console.error("Error fetching conversion rates:", err.message);
      });
  };

  const handleCurrencyChange = (currency) => {
    if (
      Date.now() > thirtyMinutesFromCurrentTimeStamp.current ||
      !conversionRates
    ) {
      fetchConversionRates();

      thirtyMinutesFromCurrentTimeStamp.current = Date.now() + 1800000; // 30 minutes in milliseconds;
    }
    setSelectedCurrency(currency);
    setToCurrency(currency);
  };

  const items = currencies.map((country) => ({
    value: `${country.currency} ${country.currencySymbol}`,
    label: country.currency,
    icon: country.flag,
    symbol: country.currencySymbol,
  }));

  // useEffect(() => {
  //   // fetchConversionRates();
  // }, []);

  return (
    <SelectComponent
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      items={items}
      currencyOptionsClassName={
        isMediumScreen
          ? "currencyOptionsClassNameIsMediumScreens"
          : "currencyOptionsClassName"
      }
    />
  );
};

export default CurrencySelect;
