"use client";
import * as styles from "@/styles/search/contentList.css";
import React, { useCallback, useEffect, useState } from "react";
import { Content } from "./Content";
import Link from "next/link";
import { Movie } from "@/types/movieInterface";
import { useSearchStore } from "@/utils/search/useStore";
import { fetchSearch } from "@/api/searchApi";

export const ContentList: React.FC = () => {
  const { searchText } = useSearchStore();
  const [page, setPage] = useState(1);
  const [morePage, setMorePage] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const unlimitedScroll = useCallback(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSearch(page);
        const filteredData = searchText
          ? data.filter((movie) =>
              movie.title.toLowerCase().includes(searchText.toLowerCase()),
            )
          : data;

        setMovies((prev) => [...prev, ...filteredData]);

        data.length === 0 ? setMorePage(false) : setPage((prev) => prev + 1);
      } catch (error) {
        console.error("검색리스트 실패", error);
      }
    };
    fetchData();
  }, [page, searchText]);

  useEffect(() => {
    unlimitedScroll();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 50 &&
        morePage
      ) {
        unlimitedScroll();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unlimitedScroll, morePage]);

  return (
    <>
      <div className={styles.topSearches}>Top Searches</div>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Link
            href={`/detail/${movie.id}`}
            key={movie.id}
            style={{ textDecoration: "none" }}
          >
            <Content poster={movie.poster_path} title={movie.title} />
          </Link>
        ))}
      </div>
    </>
  );
};
