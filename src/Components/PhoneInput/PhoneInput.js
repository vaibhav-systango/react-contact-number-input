import React, { useEffect, useState } from "react";
import phone from "phone";
import PropTypes from "prop-types";
import Phone from "../Phone";

const PhoneInput = ({
  onChange,
  countryCode,
  disabled,
  containerClass,
  placeholder,
  onBlur,
}) => {
  const [currentCountryCode, setCurrencyCountryCode] = useState(
    countryCode || "us"
  );
  const [value, setValue] = useState({
    phoneNumber: null,
    countryCode: countryCode || null,
    countryData: null,
  });

  const fetchAndManageUserCountryCode = async () => {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res?.json();
    const userCountryCode = data?.country_code?.toLowerCase();
    setCurrencyCountryCode(userCountryCode || "us");
  };

  useEffect(() => {
    fetchAndManageUserCountryCode();
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  const handlePhoneOnChange = (phoneNumber, country_code, countryData) => {
    const validData = phone(
      `${country_code}${phoneNumber?.replace(/\D+/g, "")}`,
      { country: countryData?.countryCode?.toUpperCase() }
    );

    if (phoneNumber[0] === "0") {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: true,
        message: "0 cannot be the first digit of your mobile number.",
        validData: validData,
      });
    } else if (phoneNumber[0] === "(" && phoneNumber[1] === "0") {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: true,
        message: "0 cannot be the first digit of your mobile number.",
        validData: validData,
      });
    } else if (!validData.isValid) {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: true,
        message: "Please enter a valid number.",
        validData: validData,
      });
    } else {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: false,
        message: "",
        validData: validData,
      });
    }
  };

  return (
    <Phone
      disabled={disabled}
      containerClass={containerClass}
      countryCode={currentCountryCode}
      handleOnChange={handlePhoneOnChange}
      handleOnBlur={onBlur}
      placeholder={placeholder}
    />
  );
};
PhoneInput.propTypes = {
  onChange: PropTypes.func,
  countryCode: PropTypes.string,
  disabled: PropTypes.bool,
  containerClass: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
};
export default PhoneInput;
