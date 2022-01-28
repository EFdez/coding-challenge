import React from "react";

const FoodContainer = ({
  food,
  Icon,
  title,
  separator = false,
  unload = 3,
}) => {
  return (
    <div className={`Piece ${separator && "pieces_separator"}`}>
      <h2 className="text-figure-footer">
        x{unload} {title}
      </h2>
      <div className="Piece">
        <div className={`${food}-svg Piece_horizontal`}>
          <div className={`Piece_${food}`}>
            <Icon />
          </div>
          <div className={`Piece_${food}`}>
            <Icon />
          </div>
          <div className={`Piece_${food}`}>
            <Icon />
          </div>
        </div>
      </div>
    </div>

  );
};

export default FoodContainer;
