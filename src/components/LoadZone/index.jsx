import React, { useEffect } from "react";
import { ReactComponent as GroguPod } from "../../assets/images/Grogu-Pod.svg";
import { ReactComponent as Wardrobe } from "../../assets/images/Wardrobe.svg";

import "./index.scss";

const LoadZone = ({ roadLength, groguPosition }) => {
  const tiles = roadLength ? roadLength + 1 : 7;
  const roadArray = new Array(tiles).fill(0).map((el, index) => index);
  roadArray.splice(tiles - 1, 1, "wardrobe");
  roadArray.splice(groguPosition, 1, "grogu");

  const drawRoadEmpty = () => {
    return roadArray.map((tile, index) => (
      <p key={index} className="roadTile">
        {index + 1}
      </p>
    ));
  };

  const drawRoadGrogu = (groguPosition) => {
    return roadArray.map((tile, index) => {
      if (index + 1 === groguPosition) {
        return (
          <div key={index} className="grogu-svg animate-floating">
            <GroguPod />
          </div>
        )} else if (index + 1 === 7) {
          return (
            <div key={index} className="wardrobe-svg animate-wiggle">
              <Wardrobe />
            </div>
          )
      } else {
        return (
          <p key={index} className="roadTile">
            {index + 1}
          </p>
        );
      }
    });
  };

  useEffect(() => {
    drawRoadGrogu(groguPosition);
  }, [groguPosition, roadArray]);

  return (
    <div className="roadTile-wrapper">
      {!groguPosition && drawRoadEmpty()}
      {groguPosition && drawRoadGrogu(groguPosition)}
      
    </div>
  );
};

export default LoadZone;
