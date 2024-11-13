import NavBar from "@/components/common/navBar";
import { ContentList } from "@/components/search/ContentList";
import { SearchBar } from "@/components/search/SearchBar";
import { page } from "@/styles/globalTheme.css";
import { InferGetServerSidePropsType } from "next";

export default function Search() {
  return (
    <div className={page}>
      <SearchBar />
      <ContentList />
      <NavBar />
    </div>
  );
}
