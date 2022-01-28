import React, { useState } from "react";

import { Grid, Cell } from "react-foundation";
import GameBoard from "../../components/GameBoard";

import './index.scss'

const Game = () => {
  const [showGame, setShowGame] = useState(false)
  const handleShowGame = () => {
    setShowGame(true)
  }

  return (
    <Grid className="grid-container Game">
      <Cell small={10} className="Game_container small-offset-1">
        <h1 className="text-bigger text-mandalore">JuegO</h1>
        {showGame ?
          (<GameBoard />)
          :
          (
            <Cell className='play-button_wrapper' small={12}>
              <button className='button expanded play-button text-mandalore text-big' onClick={handleShowGame}>
                ¿Una partidilla?
              </button>
            </Cell>
          )}
      </Cell>
    </Grid>
  );
};

export default Game;
