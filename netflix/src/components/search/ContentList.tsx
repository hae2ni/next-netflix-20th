"use client";
import { fetchPopular } from "@/api/MovieList";
import * as styles from "@/styles/search/contentList.css";
import React, { useEffect, useState } from "react";
import { Content } from "./Content";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export const ContentList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopular();
        setMovies(data);
      } catch (error) {
        console.error("검색리스트 실패", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p className={styles.topSearches}>Top Searches</p>
      {movies.map((movie) => (
        <Content
          key={movie.id}
          poster={movie.poster_path}
          title={movie.title}
        />
      ))}
      <div>ContentList</div>
    </>
  );
};
