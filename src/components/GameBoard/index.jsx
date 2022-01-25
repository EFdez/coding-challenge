import React, { useState, useEffect } from "react";

import "./index.css";

import { ReactComponent as Egg } from "../../assets/images/Egg.svg";
import { ReactComponent as Cookie } from "../../assets/images/Cookie.svg";
import { ReactComponent as Frog } from "../../assets/images/Frog.svg";

import Dice from "../../components/Dice";
import LoadZone from "../../components/LoadZone";
import FoodContainer from "../../components/FoodContainer";

import { Grid, Cell } from "react-foundation";

const GameBoard = () => {
  const MAX_CONTAINER_ITEMS = 3;
  const MAX_LENGTH_ROAD = 7;
  const DICE_FACES = 5;

  const [tastyThings, setTastyThings] = useState({
    cookie: MAX_CONTAINER_ITEMS,
    frog: MAX_CONTAINER_ITEMS,
    egg: MAX_CONTAINER_ITEMS,
  });
  const [diceNumber, setDiceNumber] = useState(undefined);
  const [groguPosition, setGroguPosition] = useState(0);
  const [winner, setWinner] = useState(undefined);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (1, DICE_FACES) + 1);
    setDiceNumber(randomNumber);
    setMovementAction(randomNumber);
  };

  const unloadAction = (thing) => {
    if (tastyThings[thing] > 0) {
      setTastyThings((prevState) => ({
        ...prevState,
        [thing]: tastyThings[thing] - 1,
      }));
    }
  };

  const groguMoves = () =>
    groguPosition < MAX_LENGTH_ROAD && setGroguPosition(groguPosition + 1);

  const setMovementAction = (diceAction) => {
    const diceActions = {
      1: () => unloadAction("cookie"),
      2: () => unloadAction("egg"),
      3: () => unloadAction("frog"),
      4: () => groguMoves(),
      defaultAction: () => console.log("no existe acción"),
    };
    return diceActions[diceAction]
      ? diceActions[diceAction]()
      : diceActions.defaultAction();
  };

  useEffect(() => {
    console.log(tastyThings);
    const checkEmptyTastyThings = Object.values(tastyThings).every(
      (elm) => elm === 0
    );
    if (groguPosition === MAX_LENGTH_ROAD) {
      console.log("GROGU WINNNNS");
      setWinner("GROGU TE HA GANADO!");
    }
    if (checkEmptyTastyThings) {
      console.log("MANDO WINSSS");
      setWinner("¡HAS GANADO!");
    }
  }, [tastyThings, groguPosition, winner]);

  return (
    <>
      <Grid medium={10} className="display GameBoard_container text-center">
        <Cell medium={10} className="medium-offset-1">
          <button className="cursor-pointer" onClick={getRandomNumber}>
            <Dice number={diceNumber ? diceNumber : 5} />
          </button>
          {diceNumber && <p>Ha salido el nº {diceNumber}</p>}
        </Cell>
      </Grid>

      <Grid medium={10} className="display GameBoard_container text-center">
        <Cell medium={10} className="medium-offset-1">
          <LoadZone
            roadLenght={MAX_LENGTH_ROAD}
            groguPosition={groguPosition}
          />
        </Cell>
      </Grid>

      <Grid className="display GameBoard_container text-center">
        <Cell medium={12} className="Pieces_list-wrapper">
          <FoodContainer food="frog" Icon={Frog} title="Ranas" unload={tastyThings['frog']}/>

          <FoodContainer
            food="egg"
            Icon={Egg}
            title="Huevos de rana"
            separator={true}
            unload={tastyThings['egg']}
          />
          <FoodContainer food="cookie" Icon={Cookie} title="galletas" unload={tastyThings['cookie']} />
        </Cell>
      </Grid>
    </>
  );
};

export default GameBoard;
