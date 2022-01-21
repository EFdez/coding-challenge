import React, { useState, useEffect } from "react";

import "./index.css";
import BabyYodaPointer from "../BabyYodaPointer";

const GameBoard = () => {
  const MAX_ITEMS = 3;
  const [tastyThings, setTastyThings] = useState({
    cookie: MAX_ITEMS,
    frog: MAX_ITEMS,
    egg: MAX_ITEMS,
  });
  const [diceNumber, setDiceNumber] = useState();

  //  Tablero con 6 posiciones + armario = 7 posiciones
  //  Grogu posición
  //  3 recipientes con 3 items cada uno
  //  1 dado con 5 posibles acciones: -1 galleta, -1 huevo, -1 rana, grogu avanza YO PARA MÍ QUE SON CUATRO. nos inventamos un retroceso?
  // dado
  // switch con acciones

  const getRandomNumber = () =>{
      setDiceNumber(Math.floor(Math.random() * (1, 5) + 1));
      console.log('CLIQUITICLÍ')
  }

  const setMovementAction = (number) => {
    switch (number) {
      case 1:
          console.log('descarga galleta');
        break;
      case 2:
        console.log('descarga huevo de rana');
        break;
      case 3:
        console.log('descarga rana');
        break;
      case 4:
        console.log('grogu avanza');
        break;
      case 5:
        console.log('no existe acción para esto');
        break;

      default:
        break;
    }
  };

//   useEffect(() => {   
//     console.log('diceNumber', diceNumber);
//     setMovementAction(diceNumber)
//   }, [diceNumber]); no puede ser al cambio porque si sale el mismo la hemos cagado.
  

  return (
    <div className="GameBoard_container">
      <h1>Juego</h1>

      <button onClick={getRandomNumber}>TIRA EL DADO</button>
      <p>Ha salido el nº {diceNumber}</p>

      <div className="pointer-wrapper">{/* <BabyYodaPointer /> */}</div>
    </div>
  );
};

export default GameBoard;
