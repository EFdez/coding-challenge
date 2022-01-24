import React from "react";

import GameBoard from "../../components/GameBoard";
import Dice from "../../components/Dice/Dice";

const Game = () => {
  return (
    <>
      <Dice number={5} rolling={true} />
    </>
  );
};

export default Game;
