import { useEffect } from "react";
import { EmojiPckerInfo } from "./components/emojiPicker/EmojiPckerInfo";



function App() {


  useEffect (()=>{
    document.title="emoji-selector"
  },[])


  return <EmojiPckerInfo/>
}

export default App;
