import React, { useContext } from "react";
import BedBathArea from "../../../../../Components/BedBathArea/BedBathArea";
import PriceChargesDetails from "./PriceChargesDetails/PriceChargesDetails";
import RatingsAAAndStar from "../../../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import ServiceCharges from "../RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";
import AppContext from "../../../../../context/AppContext";
import {
  convertCurrency,
  getDateDiffInDays,
  formatNumberWithCommasAndDecimals,
  formatNumberWithCommasAndWithoutDecimals,
} from "../../../../../utils/utility";
import { notAvailable } from "../../../../../Constants/ConstantValues";
import isEqual from 'lodash/isEqual';

const RatingsOtherDetails = ({ listingId, property }) => {
  const { toCurrency, selectedCurrency, conversionRates } =
    useContext(AppContext);
  // console.log('property',property)

  const data = [
    {
      label: `${toCurrency} / m²`,
      value: convertCurrency(
        conversionRates,
        toCurrency,
        "",
        property?.priceSqm ? property?.priceSqm : "0"
      ),
      description: null,
    },
    {
      label: `${toCurrency} / Sq. Ft.`,
      value: convertCurrency(
        conversionRates,
        toCurrency,
        "",
        property?.priceSqft
          ? formatNumberWithCommasAndWithoutDecimals(property?.priceSqft)
          : "0"
      ),
      description: null,
    },
    {
      label: "Service Charge / m²",
      value: convertCurrency(
        conversionRates,
        toCurrency,
        selectedCurrency,
        property?.serviceChargeSqm ? property?.serviceChargeSqm : "0"
      ),
      description: {
        description: <ServiceCharges />,
        heading: "Service charges",
      },
    },
    {
      label: "Service Charge / sqft.",
      value: convertCurrency(
        conversionRates,
        toCurrency,
        selectedCurrency,
        property?.serviceChargeSqft ? property?.serviceChargeSqft : "0"
      ),
      description: {
        description: <ServiceCharges />,
        heading: "Service charges",
      },
    },
    {
      label: "Property Type",
      value: property?.propertyType && !isEqual(property.propertyType,'')?property.propertyType: notAvailable,
      description: null,
    },
    {
      label: "Digital Currency accepted",
      value: property?.digitalCurrencyAccepted && !isEqual( property.digitalCurrencyAccepted, '')? property.digitalCurrencyAccepted:notAvailable,
      description: null,
    },
    {
      label: "Days on Market",
      value: getDateDiffInDays(property?.createdTime),
      description: null,
    },
    {
      label: "Available",
      value: property?.saleOrRent,
      description: null,
    },
  ];
  if (property?.saleOrRent === "For Rent") {
    // Add additional items only if the condition is fulfilled
    data.push(
      {
        label: "Rental Period",
        value: property?.rentalPeriod,
        description: null,
      },
      {
        label: "Rental Deposit Amount",
        value: convertCurrency(
          conversionRates,
          toCurrency,
          selectedCurrency,
          property?.rentalDepositAmount ? property.rentalDepositAmount : "0"
        ),

        description: null,
      },
      {
        label: "Rental Deposit Percentage",
        value: property?.rentalDepositPercentage && !isEqual(property.rentalDepositPercentage,'')?property?.rentalDepositPercentage:notAvailable ,
        description: null,
      }
    );
  }

  return (
    <>
      <div className="ratingsOtherSpacer"></div>
      <RatingsAAAndStar listingId={listingId} property={property} customStyles='customStylesTagWithInfo' />
      <BedBathArea
        beds={property?.beds}
        baths={property?.baths}
        meters={formatNumberWithCommasAndDecimals(property?.builtUpAreaSqm)}
        sqfts={formatNumberWithCommasAndWithoutDecimals(
          property?.builtUpAreaSqft
        )}
      />
      <PriceChargesDetails
        data={data}
        listingId={listingId}
        property={property}
      />
    </>
  );
};

export default RatingsOtherDetails;
