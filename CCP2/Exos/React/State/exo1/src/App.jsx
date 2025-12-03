import { useState } from 'react'
import Btn from './components/Btn'

const App = () => {
  const [compteur, setCompteur] = useState(0)

  const handleIncrement = () => {
    setCompteur(prev => prev + 1)
  }

  const handleDecrement = () => {
    if (compteur > 0) {
      setCompteur(prev => prev - 1)
    }
  }

  return (
    <>
      <p id='compteur'>
        {compteur}
      </p>
      <div id='btns'>
        <Btn label="-" onAction={handleDecrement} />
        <Btn label="+" onAction={handleIncrement} />
      </div>
    </>
  )
}

export default App
