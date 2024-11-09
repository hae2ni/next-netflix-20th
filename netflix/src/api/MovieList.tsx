import { instance } from './instance';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

interface FetchMoviesResponse {
    results: Movie[];
}

interface TV {
    id: number;
    title: string;
    poster_path: string;
}

interface FetchTVResponse {
    results: TV[];
}

export const fetchMovies = async (): Promise<Movie[]> => {
    const response: FetchMoviesResponse = await instance.get(
        `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    return response.results;
};

export const fetchTV = async (): Promise<TV[]> => {
    const response: FetchTVResponse = await instance.get(
        `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    return response.results;
};