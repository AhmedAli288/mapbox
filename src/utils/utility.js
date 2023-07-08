const _ = require("lodash");

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!email.match(emailRegex)) {
  //   return false;
  // }
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[!@#£$%^&*(),.?":{}|<>]/;

  const errors = [];

  if (password.length < minLength) {
    errors.push("Password length must be at least 8 characters.");
  }

  if (!uppercaseRegex.test(password)) {
    errors.push("Password should contain capital letters.");
  }

  if (!lowercaseRegex.test(password)) {
    errors.push("Password should contain lowercase letters.");
  }

  if (!numberRegex.test(password)) {
    errors.push("Password should contain at least one number.");
  }

  if (!symbolRegex.test(password)) {
    errors.push("Password must contain a special character.");
  }

  const isValid = _.isEqual(errors.length, 0);

  return {
    isValid: isValid,
    errors: errors,
  };
};

export const disableInputFocusOnScroll = () => {
  const activeElement = document.activeElement;
  if (activeElement && activeElement.tagName === "INPUT") {
    activeElement.blur();
  }
};

export const getObjectById = (arrayData, idOfObject) => {
  return arrayData.find((item) => _.isEqual(item.id, parseInt(idOfObject)));
};
export const validateMobileNumber = (phoneNumber, phoneCode) => {
  if (!phoneCode) {
    // No country selected, return false
    return false;
  }

  switch (phoneCode) {
    case "971": // UAE
      // Mobile number should start with '5' and have a length of 9 digits
      return /^5\d{8}$/.test(phoneNumber);
    case "1": // USA
      // Mobile number should start with '1' and have a length of 10 digits
      return /^1\d{10}$/.test(phoneNumber);
    case "33": // Russia
      // Mobile number should start with '7' and have a length of 11 digits
      return /^7\d{10}$/.test(phoneNumber);
    case "91": // India
      // Mobile number should start with '7', '8', or '9' and have a length of 10 digits
      return /^[789]\d{9}$/.test(phoneNumber);
    case "44": // United Kingdom
      // Mobile number should start with '7', '8', or '9' and have a length of 10 digits
      return /^(?:(?:\+|0{0,2})44|0)\s?(?:(?:\d{5}\s?\d{4,5})|(?:\d{3}\s?\d{3}\s?\d{4})|(?:\d{2}\s?\d{4}\s?\d{4}))(?!\d)$/.test(
        phoneNumber
      );
    case "49": // Germany
      // Mobile number should start with '1' and have a length of 11 digits
      return /^1\d{10}$/.test(phoneNumber);
    case "966": // Saudi Arabia
      // Mobile number should start with '5' and have a length of 9 digits
      return /^5\d{8}$/.test(phoneNumber);
    case "33": // France
      // Mobile number should start with '6' or '7' and have a length of 9 digits
      return /^[67]\d{8}$/.test(phoneNumber);
    case "39": // Italy
      // Mobile number should start with '3' and have a length of 10 digits
      return /^3\d{9}$/.test(phoneNumber);
    case "86": // China
      // Mobile number should start with '1' and have a length of 11 digits
      return /^1\d{10}$/.test(phoneNumber);
    case "7": // Russia
      // Mobile number should start with '7' and have a length of 11 digits
      return /^7\d{10}$/.test(phoneNumber);
    case "20": // Egypt
      // Mobile number should start with '1' or '0' and have a length of 11 digits
      return /^[10]\d{10}$/.test(phoneNumber);
    case "90": // Turkey
      // Mobile number should start with '5' and have a length of 10 digits
      return /^5\d{9}$/.test(phoneNumber);
    default:
      // For other countries, no specific validation is applied
      return true;
  }
};

export const base64Generator = () => {
  const key =
    process.env.REACT_APP_BASE_64_CHARACTERS +
    Math.random().toString().slice(2, 10);

  const base64Key = btoa(key);

  return base64Key;
};

export const objToBase64 = (obj) => {
  const jsonString = JSON.stringify(obj);
  const stringToEncode = process.env.REACT_APP_BASE_64_CHARACTERS + jsonString;
  const base64String = btoa(stringToEncode);
  return base64String;
};

export const base64ToObj = (string) => {
  const decodedString = atob(string);
  const jsonString = decodedString.replace(
    process.env.REACT_APP_BASE_64_CHARACTERS,
    ""
  );
  const obj = JSON.parse(jsonString);
  return obj;
};
