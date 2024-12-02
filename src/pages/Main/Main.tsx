import s from "./styles.module.css";
import { getNews, NewsResponsType } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { LatestNews } from "../../components/LatestNews/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";

export const Main = () => {

  const { filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    keywords: '',
    category: null,
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsResponsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={s.main}>
      <LatestNews banners={data && data.news} isLoading={isLoading} />

      <NewsByFilters filters={filters} changeFilter={changeFilter} isLoading={isLoading} news={data?.news}/> 
    </main>
  );
};






// ..............................................................................................................

  // const [news, setNews] = useState<NewsType[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [categories, setCategories] = useState<string[]>([]);
  // const [keywords, setKeywords] = useState<string>("");
  // const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // const fetchNews = async (currentPage: number) => {
  //   try {
  //     setIsLoading(true);
  //     const nextNews = await getNews({
  //       page_number: currentPage,
  //       page_size: PAGE_SIZE,
  //       keywords: debouncedKeywords,
  //       category: selectedCategory === 'All' ? null : selectedCategory});
  //     setNews(nextNews);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchCategories = async () => {
  //   try {
  //     const response = await getCategories();
  //     setCategories(['All', ...response.categories]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategories()
  // }, [])

  // useEffect(() => {
  //   fetchNews(currentPage);
  // }, [currentPage, selectedCategory, debouncedKeywords]);


      {/* <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      /> */}
      {/* {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton counte={1} type={"bunner"} />
      )} */}

            {/* {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton counte={10} type={"item"} />
      )} */}