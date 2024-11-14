"use client";
import { fetchPopular } from "@/api/MovieList";
import * as styles from "@/styles/search/contentList.css";
import React, { useEffect, useState } from "react";
import { Content } from "./Content";
import Link from "next/link";

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
