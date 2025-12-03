import React from "react";
import Btn from "./components/Btn";
import { useState } from "react";


export default function App() {

  let utilisateurs = ["Jean", "Pierre", "Edouard", "Julie", "Meredith"]

  const [nom, setNom] = useState("")

  const handleClick = (utilisateurClick) => {
    setNom(utilisateurClick)
    alert(utilisateurClick)
  }

  return (
    <div>
      {utilisateurs.map((utilisateur, index) => (
        <Btn key={index} handleClick={() => handleClick (utilisateur)} nom={utilisateur} />
      ))}
    </div>
  );
}