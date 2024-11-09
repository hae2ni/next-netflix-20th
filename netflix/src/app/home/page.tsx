import NavBar from '@/components/common/navBar'
import Header from '@/components/common/header'
import TopTen from '@/components/home/TopTen'
import PlayBar from '@/components/home/PlayBar'
import Preview from '@/components/home/Preview'
import * as style from '@/styles/globalTheme.css'
import MovieList from '@/components/home/MovieList'

export default function Home() {
    return (
        <div className={style.page}>
            <Header />
            <div className={style.wrapper}>
                <TopTen />
                <PlayBar />
                <Preview />
                <MovieList />
            </div>
            <NavBar />
        </div>
    )
}
