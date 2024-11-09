"use client";

import * as styles from '@/styles/MovieList.css';

const MovieList = () => {

    return (
        <div className={styles.container}>
            <p className={styles.title}>Continue Watching for Emenalo</p>
            <div className={styles.contents}>
                {/* 여기에 영화 포스터 사진 리스트 띄워주기 */}
            </div>
        </div>
    );
};

export default MovieList;