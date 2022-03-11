<h1 align="center">Welcome to react-contact-number-input 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.4-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> International phone number input component for react

## Install

```sh
npm install react-contact-number-input
```

## Author

👤 **vaibhav-systango**



## Usage

You need to import ReactCountryInput from package react-country-input with the props using below-

Code Example:

```js live=true
import { PhoneInput } from "react-contact-number-input";
<PhoneInput
  disabled={disabled}
  containerClass={containerClass}
  countryCode={currentCountryCode}
  onChange={handleOnChange}
  placeholder={placeholder}
/>;
```
#### [Demo ] (https://react-contact-number-input.web.app/)
### Component Props

| Name           | Type    | Description                                                                         |
| :------------- | ------- | ----------------------------------------------------------------------------------- |
| onChange       | func    | _required_, returns the object with the details of the number                       |
| countryCode    | string  | _default value= 'us'_, selected country phone code.                                 |
| placeholder    | string  | _default value= 'Enter Mobile Number'_ ,change the value of phone input placeholder |
| containerClass | string  | _default value= ''_ ,change the phone input styling                                 |
| disabled       | boolean | _default value= false_ ,handles the input to be disabled or not                     |

## Notes on Requirements

At least `React@17.0.2` is required due to `hooks` usage in the dependency
