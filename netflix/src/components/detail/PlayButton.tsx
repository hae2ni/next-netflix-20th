import React from "react";
import * as styles from "@/styles/detail/playButton.css";
import playbtn from "/public/svgs/detail/playbutton.svg";

export const PlayButton = () => {
  return (
    <div className={styles.container}>
      <img src={playbtn} alt="재생하기" />
    </div>
  );
};
