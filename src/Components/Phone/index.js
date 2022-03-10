import React from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'
import './style.css'

const Phone = (props) => {
  return (
    <div>
      <PhoneInput
        containerClass={props.containerClass}
        disabled={props.disabled}
        placeholder={props.placeholder  }
        countryCodeEditable
        country={props.countryCode}
        value={props.value}
        isValid={(number) => {
          let isVisible = false
          if (number.match(/12345/)) {
            return isVisible
          } else if (number.match(/1234/)) {
            return isVisible
          } else {
            return (isVisible = true)
          }
        }}
        onChange={(number, countryData, e, data) => {
          const phoneData = data.split(' ')
          const [c, ...rest] = phoneData
          props.handleOnChange(rest.join(' '), c, countryData)
        }}
      />
    </div>
  )
}

Phone.propTypes = {
  disabled: PropTypes.bool,
  countryCode: PropTypes.string,
  containerClass: PropTypes.string,  
  handleOnChange: PropTypes.func,
  value: PropTypes.string,
  placeholder:PropTypes.string
}

Phone.defaultProps = {
  countryCode: 'us',
  disabled: false,  
  containerClass: '',
  placeholder:'Enter Mobile Number'
}

export default Phone
