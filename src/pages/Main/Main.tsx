
import { useEffect, useState } from "react";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import s from "./styles.module.css"
import { getNews, NewsType } from "../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";

export const Main = () => {
  const [news, setNews] = useState<NewsType[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const nextNews = await getNews()
        setNews(nextNews)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])

  return (
    <main className={s.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news}/>
    </main>
  );
};
