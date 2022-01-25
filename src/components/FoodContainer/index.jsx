import React from "react";

const FoodContainer = ({
  food,
  Icon,
  title,
  separator = false,
  unload = 3,
}) => {
  console.log(unload);
  return (
    <div className={`Piece ${separator && "pieces_separator"}`}>
      <h2 className="text-figure-footer">
        x{unload} {title}
      </h2>
      <div className={`${food}-svg Piece_horizontal`}>
        {unload == 1 && (
          <div className={`Piece_${food}`}>
            <Icon />
          </div>
        )}
        {unload === 2 && (
          <>
            <div className={`Piece_${food}`}>
              <Icon />
            </div>
            <div className={`Piece_${food}`}>
              <Icon />
            </div>
          </>
        )}
        {unload === 3 && (
          <>
            <div className={`Piece_${food}`}>
              <Icon />
            </div>
            <div className={`Piece_${food}`}>
              <Icon />
            </div>
            <div className={`Piece_${food}`}>
              <Icon />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodContainer;
