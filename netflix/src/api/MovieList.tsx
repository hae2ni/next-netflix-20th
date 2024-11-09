import axios from 'axios';

const API_KEY = 'your_tmdb_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: 1,
            },
        });
        return response.data.results; // 영화 리스트 반환
    } catch (error) {
        console.error('영화 목록 불러오기 실패:', error);
        throw error;
    }
};
