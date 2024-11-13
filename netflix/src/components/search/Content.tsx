import React from "react";
import Image from "next/image";
import * as styles from "@/styles/search/Content.css";
import playIcon from "/public/svgs/search/play_content.svg";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"; // 기

export const Content = ({ title, poster }) => {
  const imageUrl = `${IMAGE_BASE_URL}${poster}`;

  return (
    <li className={styles.container}>
      <Image alt="포스터" width={200} height={76} src={imageUrl} />
      <span className={styles.textplaycontainer}>
        {title}
        <Image src={playIcon} alt="재생" />
      </span>
    </li>
  );
};
