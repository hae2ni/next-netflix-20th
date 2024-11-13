import React from "react";
import * as style from "@/styles/search/searchBar.css";
import searchIcon from "/public/svgs/search/searchbar.svg";
import cancelIcon from "/public/svgs/search/cancel_search.svg";

export const SearchBar = () => {
  return (
    <div>
      <img className={style.icon} src={searchIcon} alt="검색" />
      <input
        className={style.searchInput}
        placeholder="Search for a show,movie,genre, e.t.c"
      />
      <img className={style.icon} src={cancelIcon} alt="검색취소" />
    </div>
  );
};
