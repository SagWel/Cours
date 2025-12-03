import { useState } from "react"
import Btn from "./components/Btn"

const App = () => {

  const randomColor = () => {
    let color = Math.floor(Math.random()*16777215).toString(16)

    while (color.length < 6) {
      color = "0" + color
    }

    return "#" + color
  }

  const [backgroundColor, setBackgroundColor] = useState("#E7E7E7")

  const handleClick = () => {
    setBackgroundColor(randomColor())
  }

  return (
    <div style={{
      background: backgroundColor,
      minHeight: "100vh",
    }}>
      <Btn action={handleClick}/>
    </div>
  )
}

export default App