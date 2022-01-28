import React from "react";

import "./index.css";

//fue bonito mientras duró
const BabyYodaIllustration = () => {
  return (
    <>
      <div className="css-art_text-small"><p>donde te pintas?</p></div>
      <div className='css-art_container show-for-medium'>
        <div className="css-art_text"><p>donde te pintas?</p></div>
        <div id="suns"></div>
        <div id='container_grogu'>
          <div id="egg_back"></div>
          <div id="grogu">
            <div id="body"></div>
            <div id="head">
              <div id="left_ear"></div>
              <div id="right_ear"></div>
              <div id="left_eye"></div>
              <div id="right_eye"></div>
              <div id="smile"></div>
            </div>
            <div id="collar"></div>
          </div>
          <div id="egg">
            <div id="left_hand"></div>
            <div id="right_hand"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BabyYodaIllustration;
