import {
  NewsType,
  ParamsType,
} from "../../api/apiNews";
import { TOTAL_PAGE } from "../../constants/constants";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import { Pagination } from "../Pagination/Pagination";
import s from "./styles.module.css";

type NewsByFiltersProps = {
  filters: ParamsType;
  changeFilter: (key: string, value: any) => void;
  isLoading: boolean;
  news: NewsType[] | undefined;
};

export const NewsByFilters = ({
  filters,
  changeFilter,
  isLoading,
  news,
}: NewsByFiltersProps) => {

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
      <NewsFilters filters={filters} changeFilter={changeFilter}/>
      <Pagination
        totalPages={TOTAL_PAGE}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={filters.page_number}
      />
      <NewsList isLoading={isLoading} news={news ?? []} />

      <Pagination
        totalPages={TOTAL_PAGE}
        HandlerNextPage={HandlerNextPage}
        HandlerPreviousPage={HandlerPreviousPage}
        HandlerPageClick={HandlerPageClick}
        currentPage={filters.page_number}
      />
    </section>
  );
};
