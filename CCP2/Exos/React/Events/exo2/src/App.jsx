import React from "react";
import KeyDown from './components/KeyDown'
import { useEffect, useState } from "react";

export default function App() {

  const [keyDown, setKeyDown] = useState("Appuyez sur une touche")

  useEffect(() => {

    const handleKeyDown = (event) => {
      setKeyDown(event.key)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }

  }, [])

  return (
    <div>
      <KeyDown keyDown={keyDown} />
    </div>
  );
}