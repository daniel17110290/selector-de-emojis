import React, { useState } from 'react'

export const EmojiSearch = ({onSearch}) => {

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
        onSearch(e)
    }
    console.log(value)
  return (
    <input 
    onChange={handleChange} 
    value={value}
    type='text'/>
  )
}
