import React from "react";

import GameBoard from "../../components/GameBoard";
import BabyYodaIllustration from "../../components/BabyYodaIllustration";

import { Grid, Cell } from "react-foundation";

const Game = () => {
  return (
    <Grid className="grid-container Pieces">
      <Grid medium={10} className="display Pieces_container">
        <Cell>
          <h1 className="text-bigger text-mandalore">JuegO</h1>
      <GameBoard />
      </Cell>
    </Grid>
    </Grid>
  );
};

export default Game;
