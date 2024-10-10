
import { useEffect, useState } from "react";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import s from "./styles.module.css"
import { getNews, NewsType } from "../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";

export const Main = () => {
  const [news, setNews] = useState<NewsType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const nextNews = await getNews()
        setNews(nextNews)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])

  return (
    <main className={s.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton counte={1} type={"bunner"} />}

      {!isLoading ? <NewsList news={news}/> : <Skeleton counte={10} type={"item"}/>}
    </main>
  );
};
