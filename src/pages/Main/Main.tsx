import NewsBanner from "../../components/NewsBanner/NewsBanner";
import s from "./styles.module.css";
import { CategoriesResponsType, getCategories, getNews, NewsResponsType } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";
import { Search } from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

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

  const { data: dataCategories } = useFetch<CategoriesResponsType>(getCategories);


  const HandlerNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const HandlerPreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const HandlerPageClick = (pageNumber: number) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <main className={s.main}>
      {dataCategories ? <Categories
        categories={dataCategories?.categories ?? []}
        selectedCategory={filters.category}
        setSelectedCategory={(category) => changeFilter('category', category)}
      /> : null}
      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />
      {/* {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton counte={1} type={"bunner"} />
      )} */}
      <Pagination
        totalPages={TOTAL_PAGE}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={filters.page_number}
      />
      <NewsList isLoading={isLoading} news={data?.news ?? [] } />
      {/* {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton counte={10} type={"item"} />
      )} */}
      <Pagination
        totalPages={TOTAL_PAGE}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={filters.page_number}
      />
    </main>
  );
};

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