import React from 'react'

export const EmojiButton = ({emoji, onClick}) => {

    const handleClick=()=>{
        onClick(emoji)
    }

  return (
   <button onClick={handleClick}>{emoji.symbol}</button>
  )
}
