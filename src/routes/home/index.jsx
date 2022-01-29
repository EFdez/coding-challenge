import React, { useState } from "react";

import { Grid, Cell } from "react-foundation";

import "./index.scss";

function Home() {
  const [showCrawl, setShowCrawl] = useState(false)
  const showPerdidaDeTiempo = () => {
    setShowCrawl(true)
    setTimeout(() => {
      document.querySelector('.end-text').style.visibility = "visible";
    }, 60000);
  }

  const drawnCrawl = () => {
    return (
      <>
        <Cell className="intro">
          A long time ago, in a saturday far,<br /> far away....
        </Cell>

        <div id="board">
          <div id="content">
            <p id="title">Episode LXXXIII</p>
            <p id="subtitle">CSS OR THE LOST TIME</p>
            <br />
            <p>Puede que esta haya sido la mayor pérdida de tiempo de la historia de la humanidad. Encima no ha quedado ni épico. En JS habría sido mucho más fácil.</p>
            <br />
            <p>Podría haber invertido este tiempo en meter efectitos musicales.</p>
            <br />
            <p>Voy a dejarlo estar, definitivamente.</p>
            <br />
            <p>La magia y desquiciamiento del css.</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <Grid className="grid-container Home">
      <Cell small={10} className="Home_container stars">
        <div className="end-text">
          <a href="/game">Ok</a>
        </div>

        {!showCrawl ?
          (
            <button className='button home-button text-starwars text-center text-big' onClick={showPerdidaDeTiempo}>¿Qué es esto?</button>)
          : (drawnCrawl())}
      </Cell>
    </Grid>
  );
}

export default Home;
