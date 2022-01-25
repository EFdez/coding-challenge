import React, { useEffect } from "react";
import { ReactComponent as GroguPod } from "../../assets/images/Grogu-Pod.svg";
import { ReactComponent as Wardrobe } from "../../assets/images/Wardrobe.svg";

import "./index.scss";

const LoadZone = ({ roadLength, groguPosition }) => {
  const tiles = roadLength ? roadLength + 1 : 7;
  const roadArray = new Array(tiles).fill(0).map((el, index) => index + 1);
  roadArray.splice(tiles - 1, 1, "wardrobe");
  //   const drawGroguPosition = (roadLength, groguPosition) => {

  //   };

  const drawRoadEmpty = () => {
    return roadArray.map((tile, index) => <p className="roadTile">{index+1}</p>);
  };
  useEffect(() => {
    // drawGroguPosition(roadLength, groguPosition);
    // console.log(tiles);
    // console.log(roadArray);
  }, [groguPosition, roadArray]);

  return <div className="roadTile-wrapper">{drawRoadEmpty()}</div>;
};

export default LoadZone;
