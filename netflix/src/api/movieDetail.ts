import { instance } from "./instance";

interface FetchmoviesTypes {
  original_title?: string;
  overview?: string;
  poster_path?: string;
}

export const fetchMovies = async ({
  movie_id,
}: {
  movie_id: number;
}): Promise<FetchmoviesTypes> => {
  const fetchMoviesResponse = await instance.get(
    `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}/movie/{movie_id}`,
  );
  return fetchMoviesResponse.data;
};
