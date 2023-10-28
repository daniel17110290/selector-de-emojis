import React, { forwardRef, useState, useRef, useEffect } from 'react'
import {data as emojiList} from "./data"
import { EmojiSearch } from './EmojiSearch'
import { EmojiButton } from './EmojiButton'

export const EmojiPicker = (props, inputRef) => {

  const [isOpen, setIsOpen] = useState(false)
  const [emojis, setEmojis] = useState([...emojiList])

  const containerRef=useRef(null)


  useEffect(()=>{
    window.addEventListener('click', e=>{
      if(!containerRef.current.contains(e.target)){
        setIsOpen(false)
        setEmojis(emojiList)
      }
    })
  }, [])


  // const EmojiPickerContainer = ()=>{
  //   return <div>
  //     <EmojiSearch onSearch={handleSearch}/>
  //     <div>
  //       {emojis.map(emoji=>(
  //       <div key={emoji.symbol}>{emoji.symbol}</div>
  //       ))}
  //     </div>
  //   </div>
  // }

  const handleSearch =(e) => {
    const q =e.target.value
    if (!!q){
      const search=emojiList.filter(emoji=>{
        return (
        emoji.name.toLowerCase().includes(q) || 
        emoji.keywords.toLowerCase().includes(q)
        )
      })
      setEmojis(search)
    }else{
      setEmojis(emojiList)
    }
  }

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOnclickEmoji=(emoji)=>{
    const cursorPos= inputRef.current.selectionStart
    const text= inputRef.current.value
    const prev=text.slice(0, cursorPos)
    const next=text.slice(cursorPos)

    inputRef.current.value=prev+emoji.symbol+next
    inputRef.current.selectionStart= cursorPos + emoji.symbol.length
    inputRef.current.selectionEnd= cursorPos + emoji.symbol.length
    inputRef.current.focus()
  }


  return (
    <div ref={containerRef}>
      <button onClick={handleClickOpen}>🔘</button>

      {isOpen ? 
      <div>
      <EmojiSearch onSearch={handleSearch}/>
      <div >
        {emojis.map(emoji=>(
        <EmojiButton
        key={emoji.symbol}
        emoji={emoji}
        onClick={handleOnclickEmoji}/>
        ))}
      </div>
    </div> : ""}
    </div>
  )
}

export default forwardRef(EmojiPicker)