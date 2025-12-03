import { useState } from "react"
import Btn from "./components/Btn"
import Message from "./components/Message"

const App = () => {

  const [display, setDisplay] = useState(false)
  const [label, setLabel] = useState("display")

  const handleClick = () => {
    if (!display) {
      setDisplay(true)
      setLabel("hide")
    } else if (display) {
      setDisplay(false)
      setLabel("display")
    }
  }

  return (
    <div>
      {display && <Message />}

      <Btn label={label} action={handleClick} />
    </div>
  )
}

export default App