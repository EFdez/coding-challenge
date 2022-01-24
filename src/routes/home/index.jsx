import React from "react";

import { Grid, Cell } from "react-foundation";

import "./index.css";

function Home() {
  return (
    <>
      <Grid className="grid-container fluid Home_container">
        <Cell large={12}>
          <div className="stars"></div>
          <div className="twinkling"></div>
        </Cell>
      </Grid>
      <Grid>
        <Cell large={8} className="text-crawl_container">
          <div className="fade"></div>
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p>Episode IV</p>
                <h1>A New Hope</h1>
              </div>

              <p>
                It is a period of civil war. Rebel spaceships, striking from a
                hidden base, have won their first victory against the evil
                Galactic Empire.
              </p>
              <p>
                During the battle, Rebel spies managed to steal secret plans to
                the Empire’s ultimate weapon, the DEATH STAR, an armored space
                station with enough power to destroy an entire planet.
              </p>
              <p>
                Pursued by the Empire’s sinister agents, Princess Leia races
                home aboard her starship, custodian of the stolen plans that can
                save her people and restore freedom to the galaxy…
              </p>
            </div>
          </section>
        </Cell>
      </Grid>
    </>
  );
}

export default Home;
