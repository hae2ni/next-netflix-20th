"use client";

import Image from 'next/image';
import example from '../../../public/images/TopTenMovie.png';
import topTenIcon from '../../../public/svgs/home/TopTenIcon.svg';
import * as styles from '@/styles/TopTen.css';

const TopTen = () => {

    return (
        <div className={styles.container}>
            <Image src={example} alt='이따api 연결 ㄱ'/>
            <div className={styles.topTenContainer}>
                <Image src={topTenIcon} alt='Top ten'/>
                <p className={styles.text}>#2 in Korea Today</p>
            </div>
        </div>
    );
};

export default TopTen;