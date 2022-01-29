import React, { useState, useEffect } from "react";
import { ReactComponent as GroguPod } from "../../assets/images/Grogu-Pod.svg";
import { ReactComponent as Wardrobe } from "../../assets/images/Wardrobe.svg";

import "./index.scss";

const LoadZone = ({ roadLength, groguPosition, isEmpty }) => {

  const [totalTiles, setTotalTiles] = useState(roadLength)

  const roadArray = new Array(isEmpty ? roadLength : roadLength + 1).fill(0).map((el, index) => index);
  roadArray.splice(totalTiles - 1, 1, "wardrobe");
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
      if (index === groguPosition) {
        return (
          <div key={index} className="grogu-svg animate-floating">
            <GroguPod />
          </div>
        )
      } else if (index === totalTiles) {
        return (
          <div key={index} className="wardrobe-svg animate-wiggle">
            <Wardrobe />
          </div>
        )
      } else {
        return (
          <p key={index} className="roadTile">
            {index}
          </p>
        );
      }
    });
  };

  useEffect(() => {
    if (!isEmpty) {
      drawRoadGrogu(groguPosition);
    }
  }, [groguPosition, roadArray, roadLength]);

  return (
    <div className="roadTile-wrapper">
      {isEmpty ? drawRoadEmpty() : drawRoadGrogu(groguPosition)}
    </div>
  );
};

export default LoadZone;
