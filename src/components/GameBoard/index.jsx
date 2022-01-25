import React, { useState, useEffect } from "react";

import "./index.scss";

import Modal from "react-modal";

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

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    window.location.reload(false);
  }

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
    const checkEmptyTastyThings = Object.values(tastyThings).every(
      (elm) => elm === 0
    );
    if (groguPosition === MAX_LENGTH_ROAD) {
      setWinner("Grogu");
      openModal(winner);
    }
    if (checkEmptyTastyThings) {
      setWinner("Mando");
      openModal(winner);
    }
  }, [tastyThings, groguPosition, winner]);

  return (
    <>
      <Grid medium={10} className="display GameBoard_container text-center">
        <Cell medium={10} className="medium-offset-1">
          <button className="cursor-pointer" onClick={getRandomNumber}>
            <Dice number={diceNumber ? diceNumber : 5} />
          </button>
          <p className={`${diceNumber ? "" : "hidden"}`}>
            Ha salido el nº {diceNumber}
          </p>
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
          <FoodContainer
            food="frog"
            Icon={Frog}
            title="Ranas"
            unload={tastyThings["frog"]}
          />

          <FoodContainer
            food="egg"
            Icon={Egg}
            title="Huevos de rana"
            separator={true}
            unload={tastyThings["egg"]}
          />
          <FoodContainer
            food="cookie"
            Icon={Cookie}
            title="galletas"
            unload={tastyThings["cookie"]}
          />
        </Cell>
      </Grid>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
        >
          <Grid className="display GameBoard_container">
            <Cell medium={12}>
              <button
                onClick={closeModal}
                className="Modal_close text-mandalore text-bigger"
              >
                close
              </button>
              <div className="Modal_container text-center">
                {winner === "Mando" ? (
                  <>
                    <h3 className="text-mandalore text-bigger">HAS GANADO</h3>
                    <img
                      src="https://nerdist.com/wp-content/uploads/2020/11/Nov-20-2020-08-36-54.gif"
                      alt="mando wins"
                      width={1020}
                    />
                    <p>
                      Pero igual podías darle alguna galletita o algo... no sé.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-mandalore text-bigger">HAS PERDIDO</h3>{" "}
                    <img
                      src="https://frikinerd.com/wp-content/uploads/2020/03/baby-yoda-mandaloriano.gif"
                      alt="mando wins"
                      width={850}
                    />
                  </>
                )}
              </div>
            </Cell>
          </Grid>
        </Modal>
      </div>
    </>
  );
};

export default GameBoard;
