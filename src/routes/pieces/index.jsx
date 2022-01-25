import React from "react";

import { Grid, Cell } from "react-foundation";

import { ReactComponent as Egg } from "../../assets/images/Egg.svg";
import { ReactComponent as Cookie } from "../../assets/images/Cookie.svg";
import { ReactComponent as Frog } from "../../assets/images/Frog.svg";
import { ReactComponent as GroguPod } from "../../assets/images/Grogu-Pod.svg";
import { ReactComponent as Wardrobe } from "../../assets/images/Wardrobe.svg";

import Dice from "../../components/Dice";
import FoodContainer from "../../components/FoodContainer";
import LoadZone from "../../components/LoadZone";

import "./index.scss";

const Pieces = () => {
  return (
    <Grid className="grid-container Pieces">
      <Grid medium={10} className="display Pieces_container">
        <Cell>
          <h1 className="text-bigger text-mandalore">FichAs</h1>
          <Grid className="display Pieces_container">
            <Cell medium={10} className="Pieces_list-wrapper medium-offset-1">
              <h2 className="text-figure-footer text-center">Zona de carga</h2>
            </Cell>
            <Cell className="loadZone">
              <LoadZone roadLenght={7} />
            </Cell>
          </Grid>

          <Grid medium={10} className="display Pieces_container text-center">
            <Cell medium={10} className="Pieces_list-wrapper medium-offset-1">
              <div className="Piece">
                <h2 className="text-figure-footer">Armario</h2>
                <div className="wardrobe-svg">
                  <Wardrobe />
                </div>
              </div>
              <div className="Piece pieces_separator">
                <h2 className="text-figure-footer">Grogu</h2>
                <div className="grogu-svg">
                  <GroguPod />
                </div>
              </div>
              <div className="Piece">
                <h2 className="text-figure-footer">DadO</h2>
                <Dice number={5} />
              </div>
            </Cell>
          </Grid>

          <Grid className="display text-center">
            <h3 className="text-figure-footer text-center">Recipientes con:</h3>
            <Cell medium={12} className="Pieces_list-wrapper ">
              <FoodContainer food="frog" Icon={Frog} title="Ranas" />

              <FoodContainer
                food="egg"
                Icon={Egg}
                title="Huevos de rana"
                separator={true}
              />
              <FoodContainer food="cookie" Icon={Cookie} title="galletas" />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Grid>
  );
};

export default Pieces;
