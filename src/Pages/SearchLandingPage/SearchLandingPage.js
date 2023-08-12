import React, { useState, useContext, useRef } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import SimpleSelect from "./CustomSelect/SimpleSelect";
import MultipleGroupSelect from "./CustomSelect/MultipleGroupSelect";
import NestedSelect from "./CustomSelect/NestedSelect";
import {
  UAEStates,
  UAEStateCities,
  PropertyTypes,
} from "../../Constants/UAEStatesConstants";
import "../../Styles/searchLandingStyles.css";
import CustomButton from "../../Components/Button/CustomButton";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { ExpandMoreSharp } from "@mui/icons-material";
import MoreFilterPopup from "./Popup/MoreFilterPopup";
import ManseelMap from "../../Components/Map/Map";
import Card from "../../Components/Cards/Card";
import { useSearchParams, useParams } from "react-router-dom";
import {
  addObjectToArray,
  base64ToObj,
  objToBase64,
  toCarouselArray,
} from "../../utils/utility";
import AppContext from "../../context/AppContext";
import {
  ButtonLeftArrow,
  ButtonRightArrow,
  SmallSearchIcon,
} from "../../Assets/SVG/Common/CommonSvgs";
import { useEffect } from "react";
import {
  getFilteredSearchData,
  savedSearches,
} from "../../network/apiServices";
import SearchForm from "../LandingPage/LandingPageSearchSection/SearchForm/LandingPageSearchForm";
import {
  generatePayload,
  populateStatesFromSearchedObj,
  rearrangeArray,
} from "./utils/searchingUtils";
import { errorToast, successToast } from "../../utils/useToast";

const bedsBathsData = {
  beds: ["Any", "1", "2", "3", "4", "5", "6", "7", "7+"],
  baths: ["Any", "1", "2", "3", "4", "5", "6", "7", "7+"],
};

const mapping = {
  "7+": ["8", "9", "10", "11", "12", "13", "14", "15"],
};

const sortOptions = ["Ascending", "Descending"];

const SearchLandingPage = () => {
  const {
    userObj,
    userPreferences,
    setUserPreferences,
    setNavLinkBuyOrRent,
    selectedCountry,
  } = useContext(AppContext);

  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const valueOfSearchParams = searchParams.get("value");
  const scrollRef = useRef(null);

  const [openPopup, setOpenPopup] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchedObj, setSearchedObj] = useState({});
  const [selectedState, setSelectedState] = useState(UAEStates[0]);
  const [selectedCity, setSelectedCity] = useState("");
  const [propertyType, setPropertyType] = useState(PropertyTypes[0]);
  const [selectedBedsBaths, setSelectedBedsBaths] = useState({
    beds: ["Any"],
    baths: ["Any"],
  });
  const [selectedPeriod, setSelectedPeriod] = useState("Yearly");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [exclusivesChecked, setExclusivesChecked] = useState(false);
  const [enteredValuesArray, setEnteredValuesArray] = useState([]);
  const [searchedListings, setSearchedListings] = useState([]);
  const [statesPopulated, setStatesPopulated] = useState(false);
  const [status, setStatus] = useState("Any");
  const [areaType, setAreaType] = useState("sqft");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [amenities, setAmenities] = useState({});
  const [vacant, setVacant] = useState(false);
  const [cryptoAccept, setCryptoAccept] = useState(false);
  const [instantViewing, setInstantViewing] = useState(false);
  const [syncedData, setSyncedData] = useState([]);
  const [rearrangedList, setRearrangedList] = useState([]);
  const [toggleSort, setToggleSort] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Ascending");

  const scrollContainer = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction * 100; // Adjust the scroll amount as needed
    }
  };

  const updateSearchParams = (newPayload) => {
    const base64String = objToBase64(newPayload);
    setSearchParams({ value: base64String });
  };

  const searchObject = () => {
    const baseToObject = base64ToObj(valueOfSearchParams);
    setNavLinkBuyOrRent(params.name);
    return baseToObject;
  };

  useEffect(() => {
    const rearrangedArray = rearrangeArray(searchedListings, syncedData);

    setRearrangedList(rearrangedArray);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syncedData]);

  useEffect(() => {
    setSearchedObj(searchObject());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFilteredSearchData = async () => {
    const payload = generatePayload(
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      enteredValuesArray,
      selectedCountry,
      selectedState,
      selectedCity,
      params,
      propertyType,
      exclusivesChecked,
      selectedPeriod,
      selectedBedsBaths,
      mapping,
      status,
      areaType,
      amenities,
      vacant,
      cryptoAccept,
      instantViewing
    );

    await getFilteredSearchData(payload)
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          let tags = [];
          payload.listingFilters["areas"]?.forEach((item) => {
            tags.push({ key: "Area", value: item });
          });

          payload.listingFilters["buildings"]?.forEach((item) => {
            tags.push({ key: "Building", value: item });
          });
          payload.listingFilters.tags = tags;
          updateSearchParams(payload);
          if (res.data.listings.length > 0) {
            const formattedListings = toCarouselArray(
              "title",
              res.data.listings,
              "listingImages"
            );

            setSearchedListings(formattedListings);
            setRearrangedList(formattedListings);
          } else {
            setSearchedListings(res.data.listings);
            setRearrangedList(res.data.listings);
          }
        } else if (res.data.status === "INVALID") {
          setSearchedListings([]);
          setRearrangedList([]);
        }
      })
      .catch((err) => {
        // console.log("err: ", err);
      });
  };

  useEffect(() => {
    if (selectedCountry && selectedState && selectedCity) {
      setStatesPopulated(true);
    }
  }, [selectedCountry, selectedState, selectedCity]);

  useEffect(() => {
    if (statesPopulated) {
      fetchFilteredSearchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statesPopulated]);

  useEffect(() => {
    populateStatesFromSearchedObj(
      searchedObj,
      params,
      setEnteredValuesArray,
      setSelectedState,
      setSelectedCity,
      setPropertyType,
      setExclusivesChecked,
      setMinPrice,
      setMaxPrice,
      setSelectedPeriod,
      setSelectedBedsBaths,
      setStatus,
      setAmenities,
      setVacant,
      setCryptoAccept,
      setInstantViewing
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedObj]);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleRemoveItem = (index) => {
    setEnteredValuesArray((prevArray) =>
      prevArray.filter((_, idx) => idx !== index)
    );
  };

  const handleState = (option) => {
    setSelectedState(option);
  };

  const handleCity = (option) => {
    setSelectedCity(option);
  };

  const handlePropertyType = (option) => {
    setPropertyType(option);
  };

  const handleBedsBaths = (category, itemText) => {
    setSelectedBedsBaths((prevState) => {
      const newState = {
        beds: [...prevState.beds],
        baths: [...prevState.baths],
      };

      if (itemText === "Any") {
        newState[category] = [itemText];
      } else {
        const index = newState[category].indexOf(itemText);
        if (index === -1) {
          newState[category].push(itemText);
          const anyIndex = newState[category].indexOf("Any");
          if (anyIndex !== -1) {
            newState[category].splice(anyIndex, 1);
          }
        } else {
          newState[category].splice(index, 1);
        }
      }

      return newState;
    });
  };

  const handleExclusivesToggle = () => {
    setExclusivesChecked((prevChecked) => !prevChecked);
  };

  const saveSearch = async () => {
    if (userObj) {
      const savedSearche = userPreferences?.savedSearches;

      let areasArray = enteredValuesArray
        .filter((item) => item?.key === "Area")
        .map((item) => item?.value);

      let buildingsArray = enteredValuesArray
        .filter((item) => item?.key === "Building")
        .map((item) => item?.value);

      let minPriceValue = minPrice ? parseInt(minPrice) : null;
      let maxPriceValue = maxPrice ? parseInt(maxPrice) : null;

      if (minPriceValue && !maxPriceValue) {
        maxPriceValue = 1000000000;
      } else if (!minPriceValue && maxPriceValue) {
        minPriceValue = 0;
      }

      const payload = {
        savedAction: "ADD",
        email: userObj?.email,
        country: selectedCountry,
        state: selectedState === "All Emirates" ? "All" : selectedState,
        city:
          selectedCity !== "All Cities"
            ? selectedCity === "Dubai City"
              ? "Dubai"
              : selectedCity
            : null,
        exclusive: exclusivesChecked,
        propertyType: propertyType === "Select All" ? null : propertyType,
        beds:
          selectedBedsBaths.beds.length > 0
            ? selectedBedsBaths.beds[0] === "Any"
              ? ["ALL"]
              : selectedBedsBaths.beds
                  .map((item) => (item === "7+" ? mapping["7+"] : item))
                  .flat()
            : null,
        baths:
          selectedBedsBaths.baths.length > 0
            ? selectedBedsBaths.baths[0] === "Any"
              ? ["ALL"]
              : selectedBedsBaths.baths
                  .map((item) => (item === "7+" ? mapping["7+"] : item))
                  .flat()
            : null,
        price:
          minPriceValue && maxPriceValue
            ? `${minPriceValue}-${maxPriceValue}`
            : "Any",
        neighbourhood: areasArray,
        buildings: buildingsArray,
        saleOrRent: params.name.toUpperCase(),
      };

      await savedSearches(payload)
        .then((res) => {
          console.log("Search saved successfully!");
          successToast("Search saved successfully!");
          const updatedSearches = addObjectToArray(
            res,
            savedSearche,
            "listingReferenceId"
          );

          const updatedData = {
            ...userPreferences,
            savedSearches: updatedSearches,
          };

          setUserPreferences(updatedData);
        })
        .catch((err) => {
          errorToast("Search not saved");
          console.log("err: ", err);
        });
    } else {
      errorToast("Please login first.");
    }
  };

  const toggleSortClick = () => {
    setToggleSort((prev) => {
      return !prev;
    });
  };

  const handleSorting = (value) => {
    setSelectedSortOption(value);
    let lists;
    // Sort the listings based on purchasePrice (convert to number for proper sorting)
    if (params.name === "buy") {
      if (value === "Ascending") {
        lists = searchedListings.sort(
          (a, b) => parseFloat(a.purchasePrice) - parseFloat(b.purchasePrice)
        );
      } else {
        lists = searchedListings.sort(
          (a, b) => parseFloat(b.purchasePrice) - parseFloat(a.purchasePrice)
        );
      }
    } else if (params.name === "rent") {
      if (value === "Ascending") {
        lists = searchedListings.sort(
          (a, b) => parseFloat(a.rentalPrice) - parseFloat(b.rentalPrice)
        );
      } else {
        lists = searchedListings.sort(
          (a, b) => parseFloat(b.rentalPrice) - parseFloat(a.rentalPrice)
        );
      }
    }

    setRearrangedList(lists);
  };

  return (
    <>
      <Box mx={3} mt={3}>
        <Grid container spacing={1} className="searchLandingMainContainer">
          <Grid item xs={6} sm={4} lg={1.7}>
            <SimpleSelect
              value={selectedState}
              onChange={handleState}
              items={UAEStates}
              flag
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={1.7}>
            <SimpleSelect
              value={selectedCity}
              onChange={handleCity}
              items={UAEStateCities[selectedState]}
            />
          </Grid>
          <Box className="visibleOnlyInXS" />
          <Grid item xs={6} sm={4} lg={1.7}>
            <SimpleSelect
              value={propertyType}
              onChange={handlePropertyType}
              items={PropertyTypes}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={1.7}>
            <MultipleGroupSelect
              data={bedsBathsData}
              handleBedsBaths={handleBedsBaths}
              selectedBedsBaths={selectedBedsBaths}
            />
          </Grid>
          <Box className="visibleOnlyInXS" />
          <Grid item xs={6} sm={4} lg={1.7}>
            <NestedSelect
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              params={params.name}
            />
          </Grid>
          <Grid item xs={3.3} sm={2} lg={1.7}>
            <CustomButton
              onClick={fetchFilteredSearchData}
              text="Search"
              dark={true}
              size="small"
              customClassName="searchLandingBtn"
              typographyVariant="DubaiRegular16ForFiltersBtns"
              rightIcon={<SmallSearchIcon />}
            />
          </Grid>
          <Grid item xs={2.7} sm={2} lg={1.7}>
            <CustomButton
              onClick={saveSearch}
              text="Save"
              dark={true}
              size="small"
              customClassName="searchLandingBtn"
              typographyVariant="DubaiRegular16ForFiltersBtns"
              rightIcon={
                <ListingCardIcon shape={"saveIcon"} shapeColor={"black"} />
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          mt={1}
          className="searchLandingMainContainer "
        >
          <Grid item xs={4} sm={4} lg={1.7} className="textCenter height100">
            <SearchForm
              customClassName="inputTagSearchLanding"
              placeholder={"neighbourhood / buildings"}
              setEnteredValuesArray={setEnteredValuesArray}
            />
          </Grid>
          <Grid
            container
            item
            xs={8}
            sm={8}
            lg={5.1}
            pb={1}
            className="textCenter alignCenter"
          >
            <Grid item sm={0.5} className="searchLandingDividerVertXS">
              <button
                className="scrollButton"
                onClick={() => scrollContainer(-1)}
              >
                <ButtonLeftArrow />
              </button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={11}
              className="tagSearchLandingContainer"
              ref={scrollRef}
            >
              <Stack direction={"row"} className="horizontalScroll">
                {enteredValuesArray.map((item, index) => (
                  <Box key={index} className="tagSearchLanding">
                    <Typography variant="DubaiRegular16ForFilters">
                      {item.value}
                    </Typography>
                    <Box
                      size="small"
                      className="tagCloseBtnSearch"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <Typography variant="DubaiRegular12">X</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item sm={0.5} className="searchLandingDividerVertXS">
              <button
                className="scrollButton"
                onClick={() => scrollContainer(1)}
              >
                <ButtonRightArrow />
              </button>
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="searchLandingDividerVert"
          />
          <Grid item xs={6} sm={3} lg={1.3} pb={1} className="textCenter ">
            <CustomButton
              text="More Filters"
              dark={false}
              size="small"
              customClassName="searchLandingBtn blackIcon"
              typographyVariant="DubaiRegular16ForFiltersBtns"
              rightIcon={<ListingCardIcon shape={"moreIcon"} shapeColor={""} />}
              variant="outlined"
              onClick={handleOpenPopup}
            />
          </Grid>
          <Grid item xs={5} sm={3} lg={1.3} className="textCenter">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={exclusivesChecked}
                onChange={handleExclusivesToggle}
                className="mt5"
              />
              <Typography
                variant="DubaiRegular16ForFilters"
                lineHeight={"1.65rem"}
              >
                Exclusives
              </Typography>
            </label>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="searchLandingDividerVertXS"
          />
          <Grid item xs={6} sm={2.95} lg={1.25} pb={1} className="textCenter">
            <Typography variant="DubaiRegular16ForFilters">
              {searchedListings.length > 0 ? searchedListings.length : 0}{" "}
              Listings
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid
            container
            item
            xs={5}
            sm={2.95}
            lg={1.25}
            pb={1}
            className="textCenter alignCenter searchLandingSortCont"
            onMouseEnter={toggleSortClick}
            onMouseLeave={toggleSortClick}
          >
            <Grid item xs={8}>
              <Typography variant="DubaiRegular16ForFilters">
                Sort by
              </Typography>
            </Grid>

            <Grid item xs={4} className="arrow-dwn">
              <ExpandMoreSharp />
            </Grid>
            {toggleSort && (
              <Stack direction="column" className="searchLandingSortDiv">
                {sortOptions.map((item, ind) => (
                  <Typography
                    variant="DubaiRegular16ForFilters"
                    key={ind}
                    onClick={() => handleSorting(item)}
                    px={2}
                    py={1}
                    className={
                      selectedSortOption === item
                        ? "active cursorPointer searchLandingPageSortOptions"
                        : "cursorPointer searchLandingPageSortOptions"
                    }
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
        <hr className="searchLandingHrTag" />
      </Box>
      <Grid container className="mapAndListingsContainer">
        <Grid item xs={12} sm={12} md={7} mb={1}>
          <Box ml={3} mr={1}>
            <ManseelMap
              listings={searchedListings}
              areaStartRange={6}
              sync
              setSyncedData={setSyncedData}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4.8}
          mt={2}
          className="searchListingCardContainer"
        >
          <Grid container>
            {rearrangedList.length > 0 ? (
              rearrangedList?.map((item, key) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  key={key}
                  className="searchLandingCardsGrid"
                >
                  <Card
                    item={item}
                    key={key}
                    width={220}
                    height={240}
                    cardContentAlignment="true"
                  />
                </Grid>
              ))
            ) : (
              <Typography variant="AlwynNewRoundedRegular16" ml={2} mt={1}>
                No records found.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
      <MoreFilterPopup
        open={openPopup}
        onClose={handleClosePopup}
        status={status}
        setStatus={setStatus}
        areaType={areaType}
        setAreaType={setAreaType}
        minArea={minArea}
        setMinArea={setMinArea}
        maxArea={maxArea}
        setMaxArea={setMaxArea}
        checkedItems={amenities}
        setCheckedItems={setAmenities}
        vacant={vacant}
        setVacant={setVacant}
        cryptoAccept={cryptoAccept}
        setCryptoAccept={setCryptoAccept}
        instantViewing={instantViewing}
        setInstantViewing={setInstantViewing}
        fetchFilteredSearchData={fetchFilteredSearchData}
        showResults={showResults}
        setShowResults={setShowResults}
      />
    </>
  );
};

export default SearchLandingPage;
