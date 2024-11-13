import React from "react";
import * as styles from "@/styles/search/Content.css";
import playIcon from "/public/svgs/search/play_content.svg";

export const Content = () => {
  return (
    <li className={styles.container}>
      <img alt="포스터" className={styles.contentposter}></img>
      <span className={styles.textplaycontainer}>
        <img src={playIcon} alt="재생" />
      </span>
    </li>
  );
};
