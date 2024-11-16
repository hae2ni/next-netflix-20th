import NavBar from '@/components/common/navBar';
import { ContentList } from '@/components/search/ContentList';
import { SearchBar } from '@/components/search/SearchBar';
import { page } from '@/styles/globalTheme.css';
import * as style from '@/styles/globalTheme.css';

export default function Search() {
  return (
    <div className={style.root}>
      <div className={page}>
        <SearchBar />
        <ContentList />
        <NavBar />
      </div>
    </div>
  );
}
