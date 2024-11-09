import NavBar from '@/components/common/navBar'
import Header from '@/components/common/header'
import TopTen from '@/components/home/TopTen'
import PlayBar from '@/components/home/PlayBar'
import * as style from '@/styles/globalTheme.css'

export default function Home() {
    return (
        <div className={style.page}>
            <Header />
            <div className={style.wrapper}>
                <TopTen />
                <PlayBar />
            </div>
            <NavBar />
        </div>
    )
}
