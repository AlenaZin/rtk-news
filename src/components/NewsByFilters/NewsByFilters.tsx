import { getNews, NewsResponsType } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";
import s from "./styles.module.css";

export const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    keywords: "",
    category: null,
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsResponsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const HandlerNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const HandlerPreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const HandlerPageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };
  return (
    <section className={s.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />
      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGE}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news ?? []} />
      </PaginationWrapper>

      {/* <Pagination
        totalPages={TOTAL_PAGE}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={filters.page_number}
      />
      <NewsList isLoading={isLoading} news={data?.news ?? []} />

      <Pagination
        totalPages={TOTAL_PAGE}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={filters.page_number}
      /> */}
    </section>
  );
};
