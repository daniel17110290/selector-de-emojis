import React, { useRef } from 'react'
import { EmojiPicker } from './EmojiPicker'

export const EmojiPckerInfo = () => {

  const refInput=useRef(null)

  return (
    <div>
      <input ref={refInput}/>
      <EmojiPicker ref={refInput}/>
    </div>
  )
}
