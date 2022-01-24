import React from "react";

import { Grid, Cell } from "react-foundation";

import { ReactComponent as Egg } from "../../assets/images/Egg.svg";
import { ReactComponent as Cookie } from "../../assets/images/Cookie.svg";
import { ReactComponent as Frog } from "../../assets/images/Frog.svg";
import { ReactComponent as GroguPod } from "../../assets/images/Grogu-Pod.svg";
import { ReactComponent as Wardrobe } from "../../assets/images/Wardrobe.svg";

import Dice from "../../components/Dice/Dice";

import "./index.scss";

const Pieces = () => {
  return (
    <Grid className="grid-container Pieces">
      <Grid medium={10} className="display Pieces_container">
        <Cell>
          <h1 className="text-bigger text-mandalore">Fichas</h1>
          <Grid className="display Pieces_container">
            <Cell className="Pieces_list-wrapper">
              <div>Zona de cargsdfsa</div>
            </Cell>
            <Cell medium={10} className="Pieces_list-wrapper medium-offset-1">
              <h3 className="text-figure-footer text-center">
                Zona de carga
              </h3>
            </Cell>
          </Grid>

          <Grid medium={10} className="display Pieces_container text-center">
            <Cell medium={10} className="Pieces_list-wrapper medium-offset-1">
              <div className="Piece">
                <h3 className="text-figure-footer">Armario</h3>
                <div className="wardrobe-svg">
                  <Wardrobe />
                </div>
              </div>
              <div className="Piece">
                <h3 className="text-figure-footer">Grogu</h3>
                <div className="grogu-svg">
                  <GroguPod />
                </div>
              </div>
              <div className="Piece">
                <h3 className="text-figure-footer">DadO</h3>
                <Dice number={5} rolling={false} />
              </div>
            </Cell>
          </Grid>

          <Grid className="display text-center">
            <h2 className="text-figure-footer text-center">Recipientes con:</h2>
            <Cell medium={12} className="Pieces_list-wrapper ">
              <div className="Piece">
                <h3 className="text-figure-footer">x3 Ranas</h3>
                <div className="egg-svg Piece_eggs">
                  <div>
                    <Egg />
                  </div>
                  <div>
                    <Egg />
                  </div>
                  <div>
                    <Egg />
                  </div>
                </div>
              </div>
              <div className="Piece">
                <h3 className="text-figure-footer">x3 Huevos de rana</h3>
              </div>
              <div className="Piece">
                <h4 className="text-figure-footer">x3 Galletas</h4>
                <div className="cookie-svg Piece_cookies">
                  <div>
                    <Cookie />
                  </div>
                  <div>
                    <Cookie />
                  </div>
                  <div>
                    <Cookie />
                  </div>
                </div>
              </div>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Grid>
  );
};

export default Pieces;
