import React from "react";
import { useState } from "react";
import DislpayRandomNumber from "./components/DisplayRandomNumber";

export default function App() {

  const [number, setNumber] = useState(0)

  const handleOnClick = () => {
    setNumber(Math.floor(Math.random()*100 + 1))
  }

  return (
    <div>
      <DislpayRandomNumber number={number} />
      <button type="button" onClick={handleOnClick}>Lancer</button>
    </div>
  );
}