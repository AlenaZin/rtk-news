import { CategoriesResponsType, getCategories, ParamsType } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import s from "./styles.module.css"

type Props = {
  filters: ParamsType;
  changeFilter: (key: string, value: any) => void;
}

export const NewsFilters = ({filters, changeFilter}: Props) => {
  const { data: dataCategories } = useFetch<CategoriesResponsType>(getCategories);
  return (
    <div className={s.filters}>
        {dataCategories ? (
        <Categories
          categories={dataCategories?.categories ?? []}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};
