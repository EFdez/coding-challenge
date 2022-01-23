import React, { useState, useEffect } from "react";

import "./index.css";
import BabyYodaIllustration from "../BabyYodaIllustration";
import Stepper from "../Stepper";

const GameBoard = () => {
  const MAX_CONTAINER_ITEMS = 3;
  const MAX_LENGTH_ROAD = 6; //USAR PARA COMPONENTE CAMINIIIITO
  const DICE_FACES = 5;

  const [tastyThings, setTastyThings] = useState({
    cookie: MAX_CONTAINER_ITEMS,
    frog: MAX_CONTAINER_ITEMS,
    egg: MAX_CONTAINER_ITEMS,
  });
  const [diceNumber, setDiceNumber] = useState(undefined); //USAR PARA COMPONENTE DADO
  const [groguPosition, setGroguPosition] = useState(0);
  
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (1, DICE_FACES) + 1);
    setDiceNumber(randomNumber);
    setMovementAction(randomNumber);
  };

  const unloadAction = (thing) => {
    if (tastyThings[thing] > 0) {
      setTastyThings((prevState) => ({
        ...prevState,
        [thing]: tastyThings[thing]--,
      }));
    } else {
      console.log(`no hay más ${thing} para descargar`);
    }
  };

  const groguMoves = () => (groguPosition < MAX_LENGTH_ROAD) && setGroguPosition(groguPosition + 1)

  const setMovementAction = (diceAction) => {
    const diceActions = {
      1: () => unloadAction('cookie'),
      2: () => unloadAction('egg'),
      3: () => unloadAction('frog'),
      4: () => groguMoves(),
      defaultAction: () => console.log('no existe acción'),
    }
    return diceActions[diceAction] ? diceActions[diceAction]() : diceActions.defaultAction()
  }

  useEffect(() => {
    console.log(tastyThings)
    console.log('GroguPosition', groguPosition)
    const checkEmptyTastyThings = Object.values(tastyThings).every((elm) => elm === 0);
    if (groguPosition == MAX_LENGTH_ROAD) {
      console.log("GROGU WINNNNS");
    }
    if (checkEmptyTastyThings) {
      console.log('MANDO WINSSS')
    }
  }, [tastyThings, groguPosition]);

  return (
    <div className="GameBoard_container">
      <h1>Juego</h1>

      <button onClick={getRandomNumber}>TIRA EL DADO</button>
      <p>Ha salido el nº {diceNumber}</p>

      <div className="pointer-wrapper">{/* <BabyYodaIllustration /> */}</div>
      <Stepper />

    </div>
  );
};

export default GameBoard;
