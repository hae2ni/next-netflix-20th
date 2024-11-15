"use client";
import { fetchPopular } from "@/api/MovieList";
import * as styles from "@/styles/search/contentList.css";
import React, { useEffect, useState } from "react";
import { Content } from "./Content";
import Link from "next/link";
import { Movie } from "@/types/movieInterface";
import { useSearchStore } from "@/utils/search/useStore";

export const ContentList: React.FC = () => {
  const { searchText } = useSearchStore();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopular();
        const filteredData = searchText
          ? data.filter((movie) =>
              movie.title.toLowerCase().includes(searchText.toLowerCase()),
            )
          : data;

        setMovies(filteredData);
      } catch (error) {
        console.error("검색리스트 실패", error);
      }
    };

    fetchData();
  }, [searchText]);

  useEffect(() => {
    console.log("확인", movies);
    console.log("searchText", searchText);
  });

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
