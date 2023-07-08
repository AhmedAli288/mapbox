import CountryFlagsSvg from "../Assets/SVG/Flags/CountryFlagsSvg/CountryFlagsSvg";

export const isMediumScreens = "(max-width:1023px)";
export const zIndexMediumScreens = "(max-width:960px)";
export const defaultCurrency = "AED د.إ";
export const defaultCountry = "United Arab Emirates";
export const defaultBuyOrRent = "rent";
export const agentsMenuItems = [
  { title: "Find an Agent", link: "/buy" },
  { title: "Become an Agent", link: "/BecomeAnAgent" },
];
export const profileMenuItems = [
  { title: "My Profile", link: "/profile" },
  { title: "Sign out", link: "" },
];
export const HomeMarkerIcon = "/images/homeMarker.png";
export const PriceMarkerOneIcon = "/images/markerWithPrice1.png";
export const PriceMarkerTwoIcon = "/images/markerWithPrice2.png";
export const placeholderImage = "/images/placeholderImage.jpg";

export const authTokenPayload = {
  userRole: "CLIENT",
  registrationId: process.env.REACT_APP_MANSEEL_REGISTRATION_ID,
  clientId: process.env.REACT_APP_MANSEEL_CLIENT_ID,
  clientSecret: process.env.REACT_APP_MANSEEL_CLIENT_SECRET,
};

export const AuthURL = "/api/auth/token";
export const RefreshTokenURL = "/api/auth/refresh-token";
export const AllListingsURL = "/api/listings/all";
export const UserLoginURL = "/api/users/login";
export const ResetUserPasswordURL = "/api/email/otp/reset-password";
export const UpdateUserPasswordURL = "/api/users/update-password";
export const smsOtpURL = "/api/sms/otp/send";
export const emailOtpURL = "/api/email/otp/send";
export const validateSmsOtpURL = "/api/sms/otp/validate";
export const validateEmailOtpURL = "/api/email/otp/validate";
export const signUpURL = "/api/users/signup";

export const mapAllListingsPayload = {
  countryName: "United Arab Emirates",
  portal: "Propertyfinder",
};

export const exploreMenuItems = [
  { title: "New Developments", link: "" },
  { title: "Building Guides", link: "" },
  { title: "Area Guides", link: "" },
  { title: "Property Management", link: "" },
  { title: "Blog", link: "" },
  { title: "Mortgages", link: "" },
  { title: "MANSEEL institute", link: "" },
  { title: "Citizenship Services", link: "" },
  { title: "International Properties", link: "" },
  { title: "Building Classification", link: "" },
];

export const languageMenuItems = [
  { language: "العربية" },
  { language: "English" },
  { language: "中文" },
  { language: "Français" },
  { language: "Español" },
  { language: "Português" },
];

export const buildingTypes = [
  {
    header: "BuildingTypes",
    lowRise: ["1 - 3", "<9"],
    multiStory: ["4 - 6", "9 - 21"],
    midRise: ["7 - 9", "21 - 30"],
    smallHighRise: ["10 - 16", "30 - 50"],
    highRise: ["17 - 40", "50 - 100"],
    ultra: [">40", ">100"],
  },
];

export const SearchDataProperties = [
  {
    neighbourhood: [
      "Downtown Dubai",
      "Dubai Marina",
      "Jumeirah Lakes Towers",
      "Palm Jumeirah",
      "Jumeirah Beach Residence",
      "Jumeirah",
    ],
    community: ["", " ", " "],
    place: ["", " ", " "],
    building: ["", " ", " "],
    school: ["", " ", " "],
    agent: ["", " ", " "],
  },
  {
    agent: ["John Smith", "Jane Doe", "Mike Johnson", "Akhtar Madubney"],
    neighbourhood: ["", " ", " "],
    place: ["", " ", " "],
    community: ["", " ", " "],
    building: ["", " ", " "],
    school: ["", " ", " "],
  },
  {
    community: [
      "Dubai Hills Estate",
      "Arabian Ranches",
      "The Springs",
      "The Meadows",
    ],
    neighbourhood: ["", " ", " "],
    place: [" ", " "],
    building: ["", " ", " "],
    school: ["", " ", " "],
    agent: ["", " ", " "],
  },
  {
    building: [
      "Marina Crown",
      "Al Seef Tower",
      "The Address Dubai Mall",
      "Dubai Tower",
    ],
    neighbourhood: ["", " ", " "],
    place: ["", " ", " "],
    community: ["", " ", " "],
    school: ["", " ", " "],
    agent: ["", " ", " "],
  },
  {
    school: ["Dubai American Academy", "GEMS Wellington International School"],
    neighbourhood: ["", " ", " "],
    place: ["", " ", " "],
    community: ["", " ", " "],
    building: ["", " ", " "],
    agent: ["", " ", " "],
  },
  {
    place: ["Sharjah", "Dubai"],
    neighbourhood: ["", " ", " "],
    community: ["", " ", " "],
    building: ["", " ", " "],
    school: ["", " ", " "],
    agent: ["", " ", " "],
  },
];

export const mortgage = {
  pricePerMonth: "AED 12,345",
  totalAnnualPaymentDuration: "30",
  percentageInterest: "3.7%",
  paercentageDownPayment: "25%",
  mortgageFees: [
    [
      "AED 6,543",
      "4.0%",
      "Transfer fee",
      "This transfer fee must be paid to the Dubai Land Department (DLD) and is 4% of the purchase price.",
    ],
    [
      "AED 580",
      "0.2%",
      "Title Deed Fee",
      "The title deed fee is AED 580 for apartments, Villas and Offices or AED 430 for purchase of land. For off-plan or developer projects the fee is AED 40.",
    ],
    [
      "AED 4,200",
      "0.8%",
      "Trustee Fee",
      "The trustee fee is AED 2,000 + 5% VAT for properties below AED 500,000 purchase price and AED 4,000 for properties with a purchase price above AED 500,000.",
    ],
    [
      "AED 47,250",
      "2.0%",
      "Agency Fee",
      "Agency commission is usually 2% from the purchase price.",
    ],
    [
      "AED 1,700",
      "0.5%",
      "NOC Charges",
      "The developer is charging a fee for issuing a Non-Objection Certificate for the property seller. This also ensures the property buyer that all outstanding dues are cleared at the time of transfer.",
    ],
    ["AED 60,273", "7.5%", null, null],
  ],
};

export const exclusives = [
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
    ],
    buildingData: {
      id: 99887876,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      priceM2: "AED, 9300",
      PriceSqFt: "AED 200000",
      rentSale: "Sale",
      status: "Under Offer",
      beds: "12",
      baths: "12",
      listingRefNo: "BR-625419",
      FloorPlan: "floorplan",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 123,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "3",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    priceM2: "AED, 9000",
    PriceSqFt: "AED 900000",
    rentSale: "Rent",
    status: "Active",
    beds: "12",
    baths: "12",
    listingRefNo: "BR-655419",
    FloorPlan: "floorplan",
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
    ],
    buildingData: {
      id: 1087778,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 2,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    units: 2,
    propertyUse: "Residential",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998459/listingImages/listing_w_watermark_2x_1_vovmmm.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
    ],
    buildingData: {
      id: 1087758,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 3,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    units: 2,
    propertyUse: "Residential",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
    ],
    buildingData: {
      id: 7778,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 4,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    units: 2,
    propertyUse: "Residential",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
    ],
    buildingData: {
      id: 1009876578,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 5,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    units: 2,
    propertyUse: "Residential",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998459/listingImages/listing_w_watermark_2x_1_vovmmm.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
    ],
    buildingData: {
      id: 987778,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
    },
    id: 7,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
    ],
    buildingData: {
      id: 98765654545363637,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 10,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    units: 2,
    propertyUse: "Residential",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
    ],
    buildingData: {
      id: 1087778,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 11,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "1000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998459/listingImages/listing_w_watermark_2x_1_vovmmm.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
    ],
    buildingData: {
      id: 989877686,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      priceM2: "AED, 8000",
      PriceSqFt: "AED 800000",
      rentSale: "Rent",
      status: "Contract signed",
      beds: "11",
      baths: "12",
      listingRefNo: "BR-625409",
      FloorPlan: "floorplan23",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 12,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "1000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "5",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    priceM2: "AED, 9000",
    PriceSqFt: "AED 900000",
    rentSale: "Sale",
    status: "Active",
    beds: "12",
    baths: "12",
    listingRefNo: "BR-625419",
    FloorPlan: "floorplan",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
    ],
    buildingData: {
      id: 99887876,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      priceM2: "AED, 9300",
      PriceSqFt: "AED 200000",
      rentSale: "Sale",
      status: "Under Offer",
      beds: "12",
      baths: "12",
      listingRefNo: "BR-625419",
      FloorPlan: "floorplan",
      stories: 10,
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 123,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "3",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    priceM2: "AED, 9000",
    PriceSqFt: "AED 900000",
    rentSale: "Rent",
    status: "Active",
    beds: "12",
    baths: "12",
    listingRefNo: "BR-655419",
    FloorPlan: "floorplan",
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
      },
    ],
    buildingData: {
      id: 1087778,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      priceM2: "AED, 8000",
      PriceSqFt: "AED 800000",
      rentSale: "Rent",
      status: "Contract signed",
      beds: "11",
      baths: "12",
      listingRefNo: "BR-625409",
      FloorPlan: "floorplan23",
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 124,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circlebuilding",
    building: "Milano Boutique Residences",
    bedroom: "3",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    priceM2: "AED, 8000",
    PriceSqFt: "AED 800000",
    rentSale: "Rent",
    status: "Contract signed",
    beds: "11",
    baths: "12",
    listingRefNo: "BR-625409",
    FloorPlan: "floorplan23",
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
  {
    images: [
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998483/listingImages/listing_w_watermark_2x_f8p16j.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998459/listingImages/listing_w_watermark_2x_1_vovmmm.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998540/listingImages/listing_w_watermark_2x_jwcxvc.jpg",
      },
      {
        label: "Marina View | Smart home | 24 hour maintenance | Brandnew",
        imgPath:
          "https://res.cloudinary.com/davfxaivc/image/upload/v1684998491/listingImages/listing_w_watermark_2x_woblva.jpg",
      },
    ],
    buildingData: {
      id: 6539989787,
      buildingType: "High-rise",
      buildingZoning: "Freehold",
      buildingOwner: "Multiple Owners",
      Architect: "Mimar Emirates Engineering Consultant",
      developer: "Arthur ^ Hardman Real Estate Development",
      contractor: "Becon Construction",
      yearLaunched: "2016",
      petPolicy: "Allowed",
      hourSecurity: "Yes",
      fireFightSystem: "Installed",
      buildingNeighborhoodDescription:
        "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers. According to VALCOM's Dubai Annual 2020 Market Report, Jumeirah Village Circle is one of the most popular areas in Dubai to buy or rent properties.",
      buildingCommunity: "Jumeirah Village Circle",
      referenceNo: "BR-625419",
      BuildingAmenities: [
        "Barbecue Area",
        "Retail in Building",
        "View of water",
        "Central A/C",
        "24 Hour Security",
        "View of landmark",
        "Covered Parking",
        "Children Play Area",
        "Concierge",
        "Pool",
        "Private Garden",
        "Roof Deck",
        "Elevators",
        "Gym",
        "Children Play Area",
      ],
      buildingDescription:
        "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
      floorPlanImages: [
        {
          imgLabel: "Ground Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
          area: 123,
        },
        {
          imgLabel: "1st Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
          area: 231,
        },
        {
          imgLabel: "2nd Floor",
          imgPath:
            "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
          area: 431,
        },
      ],
      buildingName: "Milano Boutique Residences",
      yearBuilt: 2022,
      developer: "Example Developer",
      masterCommunity: "Jumeirah Village Circle (JVC)",
      district: "District 12",
      buildingMasterDeveloper: "Nakheel",
      buildingUnits: 117,
      buildingUnitsType: "Beds-8, Apartments, Duplex",
      buildingStories: 18,
      buildingListings: 1000,
      buildingHeight: "58 metres",
      buildingYearCompleted: "2018",
      buildingElevators: "2018",
      buildingServiceElevators: "2",
      buildingParking: 150,
      buildingServiceLevel: "Hours Concierge 12",
      buildingPublicParking: "Available",
      buildingServiceChargeSqM: "190 AED",
      buildingNeighborhoodImage:
        "https://res.cloudinary.com/davfxaivc/image/upload/v1686314044/Optimized-Business_Bay_Canal_Marina_21_2x_sts62a.jpg",
      buildingServiceChargeSqft: "19 AED",
      community: "Jumeirah Village Circle",
      stories: 10,
      priceM2: "AED, 7000",
      PriceSqFt: "AED 890000",
      rentSale: "Rent",
      status: "Under Offer",
      beds: "11",
      baths: "12",
      listingRefNo: "BR-625409",
      FloorPlan: "floorplan23",
      nearbyNeighborhoods: [
        { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
        {
          name: "Downtown Dubai",
          imgPath: "/images/Downtown01.jpg",
        },
        {
          name: "Business Bay",
          imgPath: "/images/BusinessBay01.jpg",
        },
      ],
      buildingImages: [
        {
          imgLabel: "Dubai",
          imgPath:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Dubai",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
        {
          imgLabel: "Bern",
          imgPath:
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "Bern",
          country: "Switzerland",
          countryFlag: <CountryFlagsSvg countryCode="CH" />,
        },
        {
          imgLabel: "Abu Dhabi",
          imgPath:
            "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Abu Dhabi",
          country: "UAE",
          countryFlag: <CountryFlagsSvg countryCode="AE" />,
        },
        {
          imgLabel: "Costa Careyes",
          imgPath:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          city: "Costa Careyes",
          country: "Mexico",
          countryFlag: <CountryFlagsSvg countryCode="MX" />,
        },
        {
          imgLabel: "New York",
          imgPath:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          city: "New York",
          country: "USA",
          countryFlag: <CountryFlagsSvg countryCode="US" />,
        },
      ],
    },
    id: 1234,
    name: "Marina View | Smart home | 24 hour maintenance | Brandnew",
    price: "AED 1,543,000",
    community: "Jumeirah Village Circle",
    building: "Milano Boutique Residences",
    bedroom: "3",
    washroom: "14",
    sizeMsqr: "2,555",
    sizeSqFt: "27150",
    developer: "Example Developer",
    stories: 10,
    unitType: "Apartment",
    yearBuilt: 2022,
    nearbyNeighborhoods: [
      { name: "Dubai Marina", imgPath: "/images/Marina01.png" },
      {
        name: "Downtown Dubai",
        imgPath: "/images/Downtown01.jpg",
      },
      {
        name: "Business Bay",
        imgPath: "/images/BusinessBay01.jpg",
      },
    ],
    neighborhoodDescription:
      "Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.",
    neighborhoodImage:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1684998496/listingImages/listing_w_watermark_2x_icsqih.jpg",
  },
];

export const detailItems = [
  "Building",
  "Developer",
  "Stories",
  "Units",
  "Property Use",
  "Year Built",
  "Units Type",
];

export const keys = [
  "building",
  "developer",
  "stories",
  "units",
  "propertyUse",
  "yearBuilt",
];

export const devlopmentImages = [
  {
    imgLabel: "Regalia",
    imgPath:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "AED 627K",
    community: "Regalia",
    sizes: "Studio, 1, 2, 3",
  },
  {
    imgLabel: "JBR",
    imgPath:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: "AED 143K",
    community: "JBR",
    sizes: "Studio, 1, 3",
  },
  {
    imgLabel: "Marina View",
    imgPath:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: "AED 543K",
    community: "Marina View",
    sizes: "Studio, 2, 3",
  },
  {
    imgLabel: "Arjan",
    imgPath:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "AED 373K",
    community: "Arjan",
    sizes: "Studio, 3",
  },
  {
    imgLabel: "JVC",
    imgPath:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: "AED 475K",
    community: "JVC",
    sizes: "Studio, 1, 2",
  },
];

export const citiesImages = [
  {
    imgLabel: "Dubai",
    imgPath:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    city: "Dubai",
    country: "UAE",
    countryFlag: <CountryFlagsSvg countryCode="AE" />,
  },
  {
    imgLabel: "Bern",
    imgPath:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    city: "Bern",
    country: "Switzerland",
    countryFlag: <CountryFlagsSvg countryCode="CH" />,
  },
  {
    imgLabel: "Abu Dhabi",
    imgPath:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    city: "Abu Dhabi",
    country: "UAE",
    countryFlag: <CountryFlagsSvg countryCode="AE" />,
  },
  {
    imgLabel: "Costa Careyes",
    imgPath:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    city: "Costa Careyes",
    country: "Mexico",
    countryFlag: <CountryFlagsSvg countryCode="MX" />,
  },
  {
    imgLabel: "New York",
    imgPath:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    city: "New York",
    country: "USA",
    countryFlag: <CountryFlagsSvg countryCode="US" />,
  },
  {
    imgLabel: "Bern",
    imgPath:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    city: "Bern",
    country: "Switzerland",
    countryFlag: <CountryFlagsSvg countryCode="CH" />,
  },
  {
    imgLabel: "Abu Dhabi",
    imgPath:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    city: "Abu Dhabi",
    country: "UAE",
    countryFlag: <CountryFlagsSvg countryCode="AE" />,
  },
  {
    imgLabel: "Costa Careyes",
    imgPath:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    city: "Costa Careyes",
    country: "Mexico",
    countryFlag: <CountryFlagsSvg countryCode="MX" />,
  },
  {
    imgLabel: "New York",
    imgPath:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    city: "New York",
    country: "USA",
    countryFlag: <CountryFlagsSvg countryCode="US" />,
  },
];

export const findArea = [
  {
    imgLabel: "Dubai Marina",
    imgPath: "/images/Marina01.png",
    link: "/specificneighbourhood/Dubai Marina",
  },
  {
    imgLabel: "Downtown Dubai",
    imgPath: "/images/Downtown01.jpg",
    link: "/specificneighbourhood/Downtown Dubai",
  },
  {
    imgLabel: "Business Bay",
    imgPath: "/images/BusinessBay01.jpg",
    link: "/specificneighbourhood/Business Bay",
  },
  {
    imgLabel: "Meydan",
    imgPath: "/images/Meydan01.jpg",
    link: "/",
  },
  {
    imgLabel: "Palm Jumeirah",
    imgPath: "/images/PalmJumeirah01.jpg",
    link: "/",
  },
  {
    imgLabel: "Jumeirah Village Circle",
    imgPath: "/images/JumeirahVillageCircle01.jpg",
    link: "/",
  },
  {
    imgLabel: "The Greens and Views",
    imgPath: "/images/GreensAndViews01.jpg",
    link: "/",
  },
  {
    imgLabel: "Arabian Residences",
    imgPath: "/images/ArabianResidences01.jpg",
    link: "/",
  },
  {
    imgLabel: "Dubai Internation City Center (DIFC)",
    imgPath: "/images/DubaiInternationCityCenter01.jpg",
    link: "/",
  },
];

export const popularAreasLinks = [
  { name: "Business Bay Real Estate", link: "#" },
  { name: "Downtown Dubai Real Estate", link: "#" },
  { name: "Dubai Marina Real Estate", link: "#" },
  { name: "Palm Jumeirah Real Estate", link: "#" },
  { name: "Dubai International Financial Center (DIFC)", link: "#" },
  { name: "Al Barari Real Estate", link: "#" },
  { name: "Jumeirah Village Circle Real Estate", link: "#" },

  { name: "Dubai Hills", link: "#" },
  { name: "Emirates Hills", link: "#" },
  { name: "Jumeirah Golf Estates", link: "#" },
  { name: "Arabian Ranches", link: "#" },
  { name: "Dubai Creek Harbor", link: "#" },
  { name: "Dubai South", link: "#" },
  { name: "Meydan", link: "#" },

  { name: "Dubai Harbor", link: "#" },
  { name: "Jumeirah", link: "#" },
  { name: "Jumeirah Beach Residence", link: "#" },
  { name: "Culture Village", link: "#" },
  { name: "Blue Waters Island", link: "#" },
  { name: "Greens & Views", link: "#" },
  { name: "Mohammed Bin Rashid City", link: "#" },
];

export const popularCitiesLinks = [
  { name: "Dubai", link: "#" },
  { name: "Abu Dhabi", link: "#" },
  { name: "Sharjah", link: "#" },

  { name: "Ajman", link: "#" },
  { name: "Ras Al Khaimah", link: "#" },
  { name: "Fujairah", link: "#" },

  { name: "Umm Al Quwain", link: "#" },
  { name: "Al Ain", link: "#" },
  { name: "Hatta", link: "#" },
];

export const UAEStates = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Umm Al Qaiwain",
  "Fujairah",
  "Ajman",
  "Ras Al Khaimah",
];

export const floorPlanImages = [
  {
    imgLabel: "Ground Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-12-870x580.jpg",
    area: 123,
  },
  {
    imgLabel: "1st Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-13-870x580.jpg",
    area: 231,
  },
  {
    imgLabel: "2nd Floor",
    imgPath:
      "https://www.arx.pt/wp-content/uploads/2016/08/Gr%C3%A2ndola-14-870x580.jpg",
    area: 431,
  },
];

export const PropertyAmenities = [
  "Unfurnished",
  "Covered Parking",
  "Pets Allowed",
  "Built-in Kitchen appliances",
  "Balcony",
  "Built-in Wardrobes",
  "Maids Room",
  "Study Room",
  "Terrace",
];

export const BuildingAmenities = [
  "Built-in Kitchen appliances",
  "Balcony",
  "Built-in Wardrobes",
  "Unfurnished",
  "Covered Parking",
  "Study Room",
  "Terrace",
  "Pets Allowed",
  "Maids Room",
];

export const listingAgents = [
  {
    imgLabel: "Agent picture",
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1686209006/listing_Virtual_tour_2x_4_wnnwtw.png",
    fullname: "Mary Steinberg",
    designation: "Senior Property Consultant",
    certification: ["agentBadgeLvl1", "agentBadgeLvl2"],
    rera: "123456",
    spokenLanguages: ["English", "Swedish", "Italian", "Spanish"],
    area: "Business Bay",
    specialization: "Executive Towers",
    email: "david.steinberg@valcom.ae",
    phone: "+971564208900",
  },
  {
    imgLabel: "Agent picture",
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1685710038/listing_Virtual_tour_2x_vfimkl.png",
    fullname: "Joe Steinberg",
    designation: "Senior Property Consultant",
    certification: ["agentBadgeLvl1", "agentBadgeLvl2"],
    rera: "123456",
    spokenLanguages: ["English", "Swedish", "Italian", "Spanish"],
    area: "Business Bay",
    specialization: "Executive Towers",
    email: "david.steinberg@valcom.ae",
    phone: "+971564208900",
  },
  {
    imgLabel: "Agent picture",
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1686208913/listing_Virtual_tour_2x_2_mfemm0.png",
    fullname: "Fred Steinberg",
    designation: "Senior Property Consultant",
    certification: ["agentBadgeLvl1", "agentBadgeLvl2"],
    rera: "123456",
    spokenLanguages: ["English", "Swedish", "Italian", "Spanish"],
    area: "Business Bay",
    specialization: "Executive Towers",
    email: "david.steinberg@valcom.ae",
    phone: "+971564208900",
  },
  {
    imgLabel: "Agent picture",
    imgPath:
      "https://res.cloudinary.com/davfxaivc/image/upload/v1686208969/listing_Virtual_tour_2x_3_wr5arh.png",
    fullname: "David Steinberg",
    designation: "Senior Property Consultant",
    certification: ["agentBadgeLvl1"],
    rera: "123456",
    spokenLanguages: ["English", "Swedish", "Italian", "Spanish"],
    area: "Business Bay",
    specialization: "Executive Towers",
    email: "david.steinberg@valcom.ae",
    phone: "+971564208900",
  },
  {
    imgLabel: "Agent picture",
    imgPath:
      "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    fullname: "Angel Steinberg",
    designation: "Senior Property Consultant",
    certification: ["agentBadgeLvl1"],
    rera: "123456",
    spokenLanguages: ["English", "Swedish", "Italian", "Spanish"],
    area: "Business Bay",
    specialization: "Executive Towers",
    email: "david.steinberg@valcom.ae",
    phone: "+971564208900",
  },
  {
    imgLabel: "Agent picture",
    imgPath:
      "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    fullname: "Angie Steinberg",
    designation: "Senior Property Consultant",
    certification: ["agentBadgeLvl1"],
    rera: "123456",
    spokenLanguages: ["English", "Swedish", "Italian", "Spanish"],
    area: "Business Bay",
    specialization: "Executive Towers",
    email: "david.steinberg@valcom.ae",
    phone: "+971564208900",
  },
];

export const listingProperties = [
  {
    propertyType: "Apartment",
    building: "Millenium Binghatti Residence",
    referenceNo: "P-000578",

    BuildingAmenities: [
      "Barbecue Area",
      "Retail in Building",
      "View of water",
      "Central A/C",
      "24 Hour Security",
      "View of landmark",
      "Covered Parking",
      "Children Play Area",
      "Concierge",
      "Pool",
      "Private Garden",
      "Roof Deck",
      "Elevators",
      "Gym",
      "Children Play Area",
    ],
    buildingDescription:
      "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
    transitScore: "80",
    walkingScore: "100",
    bikingScore: "60",
    noiseScore: "60",
    greeneryScore: "60",
    // more to come
  },
  {
    propertyType: "Villa",
    building: "Residence",
    referenceNo: "P-000575",

    BuildingAmenities: [
      "Barbecue Area",
      "Retail in Building",
      "View of water",
      "Central A/C",
      "24 Hour Security",
      "View of landmark",
      "Covered Parking",
      "Children Play Area",
      "Concierge",
      "Pool",
      "Private Garden",
      "Roof Deck",
      "Elevators",
      "Gym",
      "Children Play Area",
    ],
    buildingDescription:
      "Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018. Milano Giovanni Boutique Suites is a 14-storey, four-star serviced apartment building in Jumeirah Village Circle. Currently it is under construction and expected completion is June 2018.",
    transitScore: "80",
    walkingScore: "70",
    bikingScore: "100",
    noiseScore: "90",
    greeneryScore: "60",
    // more to come
  },
];

export const agentSectionTypes = {
  agentSection: "agentSection",
  otherAgents: "otherAgents",
};

export const otherAgentHeadings = {
  listingAgents: "Listing Agents",
  buildingExpert: "Get in touch with a Building Expert",
};

export const virtualTourData = {
  title: "Virtual Tour",
  videoUrl: "https://www.youtube.com/embed/B4o8PvcqHC4",
  defaultHeight: "650",
};

export const scoringTypes = {
  locationScoring: "Location Scoring",
};

export const locationScoringFields = [
  {
    id: "transit",
    scoreType: "Transit",
    scoreValue: listingProperties[0].transitScore,
    rightIcon: "infoCircle",
    leftIcon: "subway",
    scoreDescription:
      'Transit score is a measure of how well a location is served by public transit. It matters also how fast major transport hubs can be reached. To calculate a Transit Score, we assign a "usefulness" value to nearby transit routes based on the frequency, type of route (metro, bus, train etc.), and distance to the nearest stop on the route. The "usefulness" of all nearby routes is summed and normalized to a score between 0 - 100.',
    categories: {
      excellentTransit: {
        heading: "Excellent Transit",
        range: "85-100",
        description: "Public transportation is in very close proximity",
      },
      goodTransit: {
        heading: "Good Transit",
        range: "50-84",
        description: "Public transportation options are nearby",
      },
      someTransit: {
        heading: "Some Transit",
        range: "25-49",
        description:
          "Public transportation is available but not in close proximity",
      },
      poorTransit: {
        heading: "Poor Transit",
        range: "0-24",
        description: "No Public transportation options are available",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "walking",
    scoreType: "Walking",
    scoreValue: listingProperties[0].walkingScore,
    rightIcon: "infoCircle",
    leftIcon: "relaxingWalk",
    scoreDescription:
      "Walking Score measures the walkability or pedestrian friendliness of a building or property. For each address, we are analyzing walking routes to nearby amenities. Points are awarded based on the distance to amenities in each category. Amenities within a 5-minute walk (0,5 km) are given maximum points. A decay function is used to give points to more distant amenities, with no points given after a 30-minute walk.",
    categories: {
      walkersParadise: {
        heading: "Walker's Paradise",
        range: "90-100",
        description: "All daily errands do not require a car",
      },
      veryWalkable: {
        heading: "Very Walkable",
        range: "70-89",
        description: "Most errands can be accomplished on foot",
      },
      somewhatWalkable: {
        heading: "Somewhat Walkable",
        range: "50-69",
        description: "Some errands can be accomplished on foot",
      },
      mostlyCarDependent: {
        heading: "Mostly Car-Dependent",
        range: "25-49",
        description: "Almost all errands require a car",
      },
      carDependent: {
        heading: "Car-Dependent",
        range: "0-24",
        description: "A car is required",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "biking",
    scoreType: "Biking",
    scoreValue: listingProperties[0].bikingScore,
    rightIcon: "infoCircle",
    leftIcon: "cycling",
    scoreDescription:
      "Biking score measures whether an area is good for biking. For a given location, a Bike Score is calculated by measuring bike infrastructure (lanes, trails, etc.), hills, destinations and road connectivity, and the number of bike commuters.",
    categories: {
      bikersParadise: {
        heading: "Biker's Paradise",
        range: "85-100",
        description: "All errands can be accomplished on a bike",
      },
      veryBikeable: {
        heading: "Very Bikeable",
        range: "50-84",
        description: "Biking is convenient for almost every trip",
      },
      bikeable: {
        heading: "Bikeable",
        range: "25-49",
        description: "Some infrastructure for biking",
      },
      carDependent: {
        heading: "Somewhat Bikeable",
        range: "0-24",
        description: "Minimal or no bike infrastructure",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "noise",
    scoreType: "Noise",
    scoreValue: listingProperties[0].noiseScore,
    rightIcon: "infoCircle",
    leftIcon: "megaphone",
    scoreDescription:
      "Noise score is a measure of how quiet the environment of a property or building is. To calculate we measure the level of noise in decibel during different times of the day and also during the night.",
    categories: {
      peaceLoversParadise: {
        heading: "Peace Lover's Paradise",
        range: "85-100",
        description:
          "The building or property is in a very quiet area. No noise from highways or streets can be heard.",
      },
      veryQuietArea: {
        heading: "Very Quiet Area",
        range: "50-84",
        description:
          "Some noise can be heard but this area is generally very quiet.",
      },
      somewhatNoisyArea: {
        heading: "Somewhat Noisy Area",
        range: "25-49",
        description: "Traffic noise specifically during the day.",
      },
      veryNoisyArea: {
        heading: "Very Noisy Area",
        range: "0-24",
        description: "Consistent noise during day and night.",
      },
    },
    categoryMinWidth: "4vw",
  },
  {
    id: "greenery",
    scoreType: "Greenery",
    scoreValue: listingProperties[0].greeneryScore,
    rightIcon: "infoCircle",
    leftIcon: "greenery",
    scoreDescription:
      "Greenery score is a measure of how well a building or property is positioned within landscaped areas. To calculate we measure size and distance of green spaces within proximity of the building or the community.",
    categories: {
      natureLoversParadise: {
        heading: "Nature Lover's Paradise",
        range: "85-100",
        description:
          "The area or community consists of lush greenery with lakes, parks, streams and beautifully landscaped gardens",
      },
      veryQuietArea: {
        heading: "Very Green Area",
        range: "50-84",
        description:
          "The area or community is beautifully landscaped and parks and green spaces are close by",
      },
      somewhatNoisyArea: {
        heading: "Somewhat Green Area",
        range: "25-49",
        description: "Some parks or green spaces are within walking distance",
      },
      concreteJungle: {
        heading: "Concrete Jungle",
        range: "0-24",
        description: "No Parks or green spaces are within close proximity.",
      },
    },
    categoryMinWidth: "4vw",
  },
];

export const NearbySchoolsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      school: "Fairgreen International School",
      type: "Girls school",
      curriculum: "British",
      grades: "K-8",
      distance: "2 KM",
      pricing: "AED 18,078",
      rating: "Weak",
    },
    {
      school: "Victory Heights Primary School",
      type: "Boys school",
      curriculum: "American",
      grades: "PK-12",
      distance: "3.7 KM",
      pricing: "AED 51,000",
      rating: "Acceptable",
    },
    {
      school: "The Royal Gramma School Guildford",
      type: "Co-Education",
      curriculum: "French",
      grades: "PK-5",
      distance: "1.3 KM",
      pricing: "AED 87,000",
      rating: "Outstanding",
    },
    {
      school: "Greenfield International School",
      type: "Boys school",
      curriculum: "Arabic",
      grades: "PK-5",
      distance: "5.7 KM",
      pricing: "AED 24,000",
      rating: "Good",
    },
  ],
  khdaAttribution:
    "School ratings are provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
};

export const nearbySchoolsHeadingInfoData = {
  rating: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "Schools are rated in 5 categories:",
    description:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA) ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
};

export const infoHeadersIcon = {
  inDine: {
    icon: "inDine",
    iconVariant: "light",
  },
  takeAway: {
    icon: "takeAway",
    iconVariant: "light",
  },
  alcoholBeverage: {
    icon: "alcoholBeverage",
    iconVariant: "light",
  },
  shisha: {
    icon: "shisha",
    iconVariant: "light",
  },
  delivery: {
    icon: "delivery",
    iconVariant: "light",
  },
  bakery: {
    icon: "bakery",
    iconVariant: "light",
  },
  butchery: {
    icon: "butchery",
    iconVariant: "light",
  },
  fish: {
    icon: "fish",
    iconVariant: "light",
  },
  pig: {
    icon: "pig",
    iconVariant: "light",
  },
};

export const NearbyRestaurantsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      restaurant: "Fairgreen International School",
      cuisine: "Girls school",
      ambience: "British",
      inDine: "No",

      takeAway: "Yes",
      delivery: "Yes",
      alcoholBeverage: "No",
      shisha: "No",
      distance: "400 m",
      pricing: 20,
      rating: 1.5,
    },
    {
      restaurant: "Victory Heights Primary School",
      cuisine: "Boys school",
      ambience: "American",
      inDine: "Yes",
      takeAway: "Yes",
      delivery: "Yes",

      alcoholBeverage: "Yes",
      shisha: "Yes",
      distance: "3.7 KM",
      pricing: 70,
      rating: 2.5,
    },
    {
      restaurant: "The Royal Gramma School Guildford",
      cuisine: "Co-Education",
      ambience: "French",
      inDine: "No",

      takeAway: "Yes",
      delivery: "Yes",

      alcoholBeverage: "Yes",
      shisha: "Yes",
      distance: "200 m",
      pricing: 87,
      rating: 2.5,
    },
    {
      restaurant: "Greenfield International School",
      cuisine: "Boys school",
      ambience: "Arabic",
      inDine: "Yes",

      takeAway: "5.7 KM",
      delivery: "Yes",

      alcoholBeverage: "No",
      shisha: "Yes",
      distance: "200 m",
      pricing: 87,
      rating: 3.5,
    },
    {
      restaurant: "Fairgreen International School",
      cuisine: "Girls school",
      ambience: "British",
      inDine: "K-8",

      takeAway: "2 KM",
      delivery: "Yes",

      alcoholBeverage: "No",
      shisha: "Yes",
      distance: "200 m",
      pricing: 87,
      rating: 1,
    },
  ],
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
  khdaAttribution:
    "School ratings 1e provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
};

export const similarBuildingsData = {
  title: "Similar Buildings",
  defaultItems: 4,
  imgHeight: "268px",
  imgWidth: "267px",
  metaDataFields: { floors: "Floors", units: "Units", listings: "Listings" },
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
  iconColor: "#fff",
  iconWidth: "15",
  iconHeight: "12",
};

export const NearbySupermarketsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      supermarket: "Choithrams",
      Type: "Grocery Store",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 2,
      rating: 3.5,
    },
    {
      supermarket: "Carrefour",
      Type: "Supermarket",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 3,
      rating: 1.5,
    },
    {
      supermarket: "Lulu",
      Type: "Hypermarket",
      bakery: "No",
      butchery: "Yes",
      fish: "No",
      pig: "Yes",
      delivery: "Yes",
      distance: "400 m",
      pricing: 4,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "YES",
      fish: "yes",
      pig: "Yes",
      delivery: "No",
      distance: "400 m",
      pricing: 1,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 20,
      rating: 1.5,
    },
  ],
  khdaAttribution:
    "School ratings 1e provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
};

export const NearbyAttractionsData = {
  title: `Schools near ${listingProperties[0].building}`,
  tableData: [
    {
      Name: "Dubai Miracle Garden",
      Type: "Out Door",

      distance: "400 m",
      pricing: 2,
      rating: 3.5,
    },
    {
      Name: "Dubai Autodrome",
      Type: "Race Track",

      distance: "400 m",
      pricing: 3,
      rating: 1.5,
    },
    {
      supermarket: "Dubai Butterfly Garden",
      Type: "Outdoor Garden",

      distance: "400 m",
      pricing: 4,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "YES",
      fish: "yes",
      pig: "Yes",
      delivery: "No",
      distance: "400 m",
      pricing: 1,
      rating: 1.5,
    },
    {
      supermarket: "Choithrams",
      Type: "Girls school",
      bakery: "Yes",
      butchery: "No",
      fish: "No",
      pig: "No",
      delivery: "Yes",
      distance: "400 m",
      pricing: 20,
      rating: 1.5,
    },
  ],
  khdaAttribution:
    "School ratings 1e provided by KHDA (Knowledge and Human Development Authority). This information is for reference only. Proximity is no guarantee for enrollment.",
  btnLearnMore:
    "Learn more about nearby Restaurants, Supermarkets, Attractions",
  endIcon: "arrowRight",
  endIconColor: "white",
  dropDownText: {
    collapsed: "View More",
    expanded: "View Less",
  },
  dropDownIcons: {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  },
};

export const nearbyAroundCornerHeadingInfoData = {
  rating: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    heading: "this is rating",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",

    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  inDine: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "in Dine ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  takeAway: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "take away",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  shisha: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "in gthe shisha",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  delivery: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "delivery it is ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  alcoholBeverage: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#808080",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is rating",
    description: "take tei",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  type: {
    icon: "infoCircle",
    iconVariant: "light",
    heading: "this is rating",
    description:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  fish: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is fish",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  butchery: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is butchery",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  bakery: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is bakey",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  pig: {
    icon: "infoCircle",
    iconVariant: "light",
    mainHeading: "Schools are rated in 5 categories:",
    headingBgColor: "#777575",
    headingColor: "white",
    topDescription:
      "The Rating is done through valuations by the Knowledge and Human Development Authority (KHDA)",
    heading: "this is pork",
    description:
      "The Rating is done through valuations by the Knowledge and Human ",
    categories: {
      Outstanding: "An exceptionally high quality of performance or practice",
      VeryGood: "The quality of performance exceeds",
      Good: "The expected level of quality for every school",
      Acceptable: "The minimum level of acceptability required",
      Weak: "Quality not yet at the level acceptable",
    },
    categoryMinWidth: "7vw",
    ratingMethodHeading: "The Rating method:",
    ratingMethodDesc:
      "KHDA is inspecting and evaluating schools. The main criteria are academic attainment in core subjects, the learning environment, the achievement of students, the quality of school leadership, attitudes of students, Islamic and Arabic provisions in the curriculum, the self-evaluation process of the school.",
    anchorVertical: "bottom",
    anchorHorizontal: "right",
    transformVertical: "top",
    transformHorizontal: "right",
  },
  iconColor: "#fff",
  iconWidth: 15,
  iconHeight: 12,
};

export const ratingsReviewsData = {
  sectionTitle: `Rating and reviews for ${listingProperties[0].building}`,
  categoryRatingTitle: `How do residents rate ${listingProperties[0].building}`,
  residentReviewsTitle: `Resident Reviews `,
  rateBtnText: "Rate your building",
  overrallRating: 4.1,
  overallRatingCount: 87,
  categorizedRatingData: [
    {
      heading: "Maintenance",
      rating: 4.1,
    },
    {
      heading: "Gym",
      rating: 4.1,
    },
    {
      heading: "Staff / Security",
      rating: 4.1,
    },
    {
      heading: "Pool",
      rating: 4.1,
    },
    {
      heading: "Level of noise",
      rating: 4.1,
    },
    {
      heading: "Traffic near property",
      rating: 4.1,
    },
    {
      heading: "Guest Parking",
      rating: 4.1,
    },
    {
      heading: "Access to main roads",
      rating: 4.1,
    },
    {
      heading: "Kids Area",
      rating: 4.1,
    },

    {
      heading: "Parks nearby",
      rating: 4.1,
    },
  ],
  residentReviewsData: [
    {
      reviewer: "Smarth",
      reviewerLocation: "India",
      reviewDate: "2 weeks ago",
      rating: 4.1,
      reviewHeading: "Great Location",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Sheeba",
      reviewerLocation: "United Arab Emirates",
      reviewDate: "2 weeks ago",
      rating: 5,
      reviewHeading: "Amazing",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Anv",
      reviewerLocation: "India",
      reviewDate: "2 weeks ago",
      rating: 4,
      reviewHeading: "Beautiful experience",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Kim",
      reviewerLocation: "Malaysia",
      reviewDate: "2 weeks ago",
      rating: 4.7,
      reviewHeading: "Great",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
    {
      reviewer: "Angie",
      reviewerLocation: "United Kingdom",
      reviewDate: "2 weeks ago",
      rating: 4.9,
      reviewHeading: "Nice Location",
      reviewBody:
        "Tower is very well located and it is easy to commute. I live here since 2 years and also the staff is very friendly. Perfect place for peaceful family living.",
    },
  ],
};

export const passwordValidationCriteria = [
  "Password should contain capital letters.",
  "Password must contain a special character.",
  "Password length must be greater than 8 characters.",
  "Password should contain lowercase letters.",
  "Password should contain at least one number.",
];

export const countryLevelLayers = ["country-cluster", "country-cluster-count"];
export const stateLevelLayers = ["state-cluster-1", "state-cluster-count"];
export const cityLevelLayers = ["city-cluster", "city-cluster-count"];
export const areaLevelLayers = [
  "clusters",
  "cluster-count",
  "listings-same-coordinates",
  "listings-same-coordinates-count",
  "single-listing-cluster",
  "single-listing-cluster-count",
  "single-listing-unclustered",
  "single-listing-unclustered-price",
];
