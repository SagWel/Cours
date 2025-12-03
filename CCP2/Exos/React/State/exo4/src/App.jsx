import { useState } from "react"
import NotifOn from './svg/notification-bell-on.svg'
import NotiOff from './svg/notification-bell-off.svg'
import Btn from "./components/Btn"

const App = () => {

const [label, setLabel] = useState("OFF")
const [onOff, setOnOff] = useState(true)

const handleClick = () => {
  if (onOff) {
    setOnOff(false)
    setLabel("ON")
  } else {
    setOnOff(true)
    setLabel("OFF")
  }
}

  return (
    <>
    {onOff ? <img src={NotifOn} alt="Notifications On"/> : <img src={NotiOff} alt="Notifications Off"/>}
    <Btn label={label} onAction={handleClick} />
    </>
  )
}

export default App