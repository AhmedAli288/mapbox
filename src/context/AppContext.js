import React, { createContext, useState } from "react";
import { defaultCountry } from "../Constants/ConstantValues";

const AppContext = createContext(null);
const initial = defaultCountry;
const AppProvider = (props) => {
  const [listings, setListings] = useState([]);
  const [userObj, setUserObj] = useState(null);
  const [userPreferences, setUserPreferences] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("AED");
  const [conversionRates, setConversionRates] = useState(null);
  const [toCurrency, setToCurrency] = useState("AED");
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const [exclusives, setExclusive] = useState();
  const [editedListings, setEditedListings] = useState();
  const [exclusiveListings, setExclusiveListings] = useState([]);
  const [mapTransitSearches, setMapTransitSearches] = useState([]);
  const [buildingObjectContext, setBuildingObjectContext] = useState('');
  const [buildingReferenceNoContext, setBuildingReferenceNoContext] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(initial);
  const [listingHash, setListingHash] = useState({});
  const [buildingHash, setBuildingHash] = useState({});
  const [allSearchData, setAllSearchData] = useState([]);
  const [buyOrRent, setBuyOrRent]=useState('buy')
  const [agentData, setAgentData] = useState(null);
  const [ navLinkBuyOrRent, setNavLinkBuyOrRent] =useState('')

  const contextValue = {
    baseCurrency,
    setBaseCurrency,
    userObj,
    setUserObj,
    userPreferences,
    setUserPreferences,
    toCurrency,
    setToCurrency,
    selectedCurrency,
    setSelectedCurrency,
    listings,
    setListings,
    conversionRates,
    setConversionRates,
    exclusives,
    setExclusive,
    editedListings,
    setEditedListings,
    selectedCountry,
    setSelectedCountry,
    exclusiveListings,
    setExclusiveListings,
    mapTransitSearches,
    setMapTransitSearches,
    buildingObjectContext,
    setBuildingObjectContext,
    listingHash,
    setListingHash,
    buildingHash,
    setBuildingHash,
    allSearchData,
    setAllSearchData,
    agentData,
    setAgentData,
    buyOrRent, 
    setBuyOrRent,
    navLinkBuyOrRent,
    setNavLinkBuyOrRent,
    buildingReferenceNoContext, setBuildingReferenceNoContext
  };

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};

export default AppContext;

export { AppProvider };
