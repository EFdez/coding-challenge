import React from "react";

import { Grid, Cell } from "react-foundation";
import BabyYodaIllustration from "../../components/BabyYodaIllustration";

import "./index.scss";

function Home() {
  return (
    <Grid className="grid-container Home">
      <Grid small={12} className="Home_container">
        <Cell className="GroguHome-wrapper">
          <a href="mailto:escarlafdez@gmail.com?Subject=Igual%20esto%20ya%20es%20too%20much">
            <BabyYodaIllustration />
          </a>
        </Cell>
      </Grid>
    </Grid>
  );
}

export default Home;
