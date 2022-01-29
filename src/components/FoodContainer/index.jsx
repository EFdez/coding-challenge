import React, { useState, useEffect } from "react";

import { Grid, Cell } from "react-foundation";

const FoodContainer = ({
  food,
  Icon,
  title,
  separator = false,
  unload = 3,
  maxItems = 3
}) => {
  const [arrayItems, setArrayItems] = useState(new Array(maxItems).fill(0).map((el, index) => index))

  const drawItems = () => {
    return arrayItems.map((item, index) => {
      return (
        <div className={`Piece_${food} `}>
          <Icon />
        </div>
      )
    })
  }

  useEffect(() => {
    setArrayItems(new Array(unload).fill(0).map((el, index) => index))
  }, [unload]);

  return (
    <div className={`Piece ${separator ? "pieces_separator" : ""}`}>
      <h2 className="text-figure-footer">
        x{unload} {title}
      </h2>
      <div className="Piece">
        <div className={`${food}-svg Piece_horizontal`}>
          {drawItems()}
        </div>
      </div>
    </div>

  );
};

export default FoodContainer;
