import React from "react";
import Image from "next/image";
import * as style from "@/styles/search/searchBar.css";
import searchIcon from "/public/svgs/search/searchbar.svg";
import cancelIcon from "/public/svgs/search/cancel_search.svg";

export const SearchBar = () => {
  return (
    <div className={style.container}>
      <Image className={style.icon} src={searchIcon} alt="검색" />
      <input
        className={style.searchInput}
        placeholder="Search for a show,movie,genre, e.t.c"
      />
      <Image className={style.icon} src={cancelIcon} alt="검색취소" />
    </div>
  );
};
