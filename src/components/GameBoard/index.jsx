import React, { useState, useEffect } from "react";

import "./index.scss";


import { ReactComponent as Egg } from "../../assets/images/Egg.svg";
import { ReactComponent as Cookie } from "../../assets/images/Cookie.svg";
import { ReactComponent as Frog } from "../../assets/images/Frog.svg";

import Dice from "../../components/Dice";
import LoadZone from "../../components/LoadZone";
import FoodContainer from "../../components/FoodContainer";
import ClosingModal from "../Modal"

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [waiting, setWaiting] = useState(true)

  function openModal() {
    setModalIsOpen(true);
  }

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (1, DICE_FACES) + 1);
    setDiceNumber(randomNumber);
    setMovementAction(randomNumber);
    setWaiting(true)
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
    setTimeout(() => {
      setWaiting(false)
      return diceActions[diceAction]
      ? diceActions[diceAction]()
      : diceActions.defaultAction();
    }, 500);

  };

  const checkWinner = () => {
    const checkEmptyTastyThings = Object.values(tastyThings).every((elm) => elm === 0);
    if (groguPosition === MAX_LENGTH_ROAD) {
      setWinner("Grogu");
    }
    if (checkEmptyTastyThings) {
      setWinner("Mando");
    }
    if (winner) {
      openModal(winner);
    }
  }

  useEffect(() => {
    checkWinner()
  }, [tastyThings, groguPosition, winner]);

  return (
    <>
      <Cell small={10} className="text-center">
        <button className="cursor-pointer" onClick={getRandomNumber}>
          <Dice number={diceNumber ? diceNumber : 5} />
        </button>
        <p className={`${diceNumber ? "" : "hidden"}`}>
          {waiting ? '...' : `Ha salido el nº ${diceNumber}`}
        </p>
      </Cell>

      <Cell small={12}>
        <LoadZone
          roadLength={MAX_LENGTH_ROAD}
          groguPosition={groguPosition}
        />
      </Cell>

      <Grid className="Pieces_list-wrapper text-center">
        <Cell className='Pieces' small={4}>
          <FoodContainer
            food="frog"
            Icon={Frog}
            title="Ranas"
            unload={tastyThings["frog"]}
          />
        </Cell>
        <Cell className='Pieces' small={4}>
          <FoodContainer
            food="egg"
            Icon={Egg}
            title="Huevos de rana"
            separator={true}
            unload={tastyThings["egg"]}
          />
        </Cell>

        <Cell className='Pieces' small={4}>
          <FoodContainer
            food="cookie"
            Icon={Cookie}
            title="galletas"
            unload={tastyThings["cookie"]}
          />
        </Cell>
      </Grid>

      {modalIsOpen && <ClosingModal winner={winner} isOpen={modalIsOpen} />}

    </>
  );
};

export default GameBoard;