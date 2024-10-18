import { useEffect, useState } from "react";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import s from "./styles.module.css";
import { getCategories, getNews, NewsType } from "../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";

export const Main = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const totalPage = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const nextNews = await getNews({
        page_number: currentPage, 
        page_size: pageSize, 
        category: selectedCategory === 'All' ? null : selectedCategory});
      setNews(nextNews);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(['All', ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);
  
  const HandlerNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const HandlerPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const HandlerPageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={s.main}>
      <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton counte={1} type={"bunner"} />
      )}
      <Pagination
        totalPages={totalPage}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton counte={10} type={"item"} />
      )}
        <Pagination
        totalPages={totalPage}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={currentPage}
      />
    </main>
  );
};
