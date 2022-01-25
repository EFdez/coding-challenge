import React, { useEffect, useState } from "react";

import "./index.scss";

const Dice = ({ number = 0 }) => {
  const [rollingDice, setRollingDice] = useState(true);

  useEffect(() => {
    convertNumberToEnglish(number);
    showAnimationDice();
  }, [number]);

  const convertNumberToEnglish = (number) => {
    const englishList = ["zero", "one", "two", "three", "four", "five"];
    return englishList[number];
  };

  const showAnimationDice = () => {
    setRollingDice(true);
    setTimeout(() => {
      setRollingDice(false);
    }, 1000);
  };

  return (
    <div className="RollDice_Wrapper">
      <div className="RollDice">
        <i
          className={`Die fas fa-dice-${convertNumberToEnglish(number)} ${
            rollingDice ? "Die-shaking" : "NADA"
          }`}
        />
      </div>
    </div>
  );
};

export default Dice;
