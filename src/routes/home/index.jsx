import React from "react";

import { Grid, Cell } from "react-foundation";
import BabyYodaIllustration from "../../components/BabyYodaIllustration";

import "./index.css";

function Home() {
  return (
    <Grid className="grid-container Pieces">
      <Grid medium={10} className="display Pieces_container">
        <Cell medium={10} className="display GroguHome-wrapper">
          <a href="mailto:escarlafdez@gmail.com">
            <BabyYodaIllustration />
          </a>
        </Cell>
      </Grid>
    </Grid>
  );
}

export default Home;
