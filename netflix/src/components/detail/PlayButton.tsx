import React from "react";
import * as styles from "@/styles/more/playButton.css";
import playbtn from "/public/svgs/more/playbutton.svg";

export const PlayButton = () => {
  return (
    <div className={styles.container}>
      <img src={playbtn} alt="재생하기" />
    </div>
  );
};
