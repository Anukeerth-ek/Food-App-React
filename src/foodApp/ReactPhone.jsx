
import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input'

const ReactPhone = () => {
    const [value, setValue] = useState()
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
    )
}

export default ReactPhone;