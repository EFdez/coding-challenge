import React, { useEffect, useState } from "react";

import "./index.scss";

const Dice = ({ number = 0, animation = true }) => {
  const [rollingDice, setRollingDice] = useState(false);

  const convertNumberToEnglish = (number) => {
    const englishList = ["zero", "one", "two", "three", "four", "five"];
    return englishList[number];
  };

  const showAnimationDice = () => {
    setRollingDice(true);
    setTimeout(() => {
      setRollingDice(false);
    }, 1200);
  };

  useEffect(() => {
    if (animation) {
      showAnimationDice();
    }
    convertNumberToEnglish(number);
  }, [number, animation]);

  return (
    <div className="RollDice_Wrapper">
      <div className="RollDice">
        <i
          className={`Die fas fa-dice-${convertNumberToEnglish(number)} ${rollingDice && "Die-shaking"}`}
        />
      </div>
    </div>
  );
};

export default Dice;
